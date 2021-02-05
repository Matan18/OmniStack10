import axios from 'axios'
import Dev from '../models/Dev.js'
import parseStringAsArray from '../utils/parseStringAsArray.js'
import {findConnections, sendMessage} from '../websocket.js'

const DevController= {
    async index(request, response){
        const devs = await Dev.find();
        return response.json(devs);
    },
    async store (request, response){
        const{ github_username, techs, latitude, longitude } = request.body;
    
        let dev = await Dev.findOne({ github_username});
        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
            const { name=login, avatar_url, bio } = apiResponse.data;
        
            const techsArray = parseStringAsArray(techs);
            
            const location ={
                type: 'Point' ,
                coordinates: [longitude, latitude],
            }
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs:techsArray,
                location
            })

            //Filtrar as conexões e enviar os dev que satisfação as condiçoes de locallização e techs
            const sendSocketMessageTo=findConnections(
                {latitude,longitude},
                techsArray
            )
            sendMessage(sendSocketMessageTo, 'new-dev', dev);

        }
        return response.json(dev)
    },
    async update(request, response){
        const{github_username} = request.params;
        const {name, techs, bio, latitude, longitude} = request.body;
        const location ={
            type: 'Point' ,
            coordinates: [longitude, latitude],
        }
        
        await Dev.updateOne({github_username},{
            name:name,
            techs:parseStringAsArray(techs),
            location:location,
            bio:bio
        })

        return response.json(await Dev.findOne({ github_username}));
    },
    async destroy(request, response){
        const{github_username}=request.params;
        await Dev.deleteOne({github_username});
        return (response.json({message: "Dev Deletado", user : github_username}))
    }
}
export default DevController;