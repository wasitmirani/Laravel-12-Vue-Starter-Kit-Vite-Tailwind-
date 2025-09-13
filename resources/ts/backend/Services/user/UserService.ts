import {AxiosService} from '../../Utils/Service';
 class User {

    getAuthUser() {
        return AxiosService.get('/me');
    }

    users = (page: string, per_page?: any) => {
        return AxiosService.get(`/user?page=${page}${per_page ? `&per_page=${per_page}` : ''}`);
    }

    store = (user:any) => {
        return AxiosService.post('/user',user);
    }
    update = (user:any) => {
        return AxiosService.put('/user/'+user.id,user);
    }
    delete = (id:number) => {
        return AxiosService.delete('/user/'+id);
    }
    user = (uuid:string) =>{
        return AxiosService.get('/user/'+uuid);
    }
    countries = (id?:string)=> {
        return AxiosService.get('/countries-list?country_id='+id);
    }
    roles = ()=> {
        return AxiosService.get('/roles-list');
    }


};

export const UserService = new User();
