import { User, Profile, UserSubmit } from './../modules.d';
import {VuexModule , Module , getModule, Mutation, Action} from 'vuex-module-decorators';

import store from '@/store';
import { loginUser } from '@/store/api';



@Module({
    namespaced:true,
    name:'users',
    store,
    dynamic : true
})
class UsersModule extends VuexModule{
    user:User |null = null;
    profile?:Profile |null = null;

    get userName(){
        return this.user  && this.user.username || null;  
    }

    @Action({commit:'setUser'})
    async login(userSubmit:UserSubmit){
        const user = await loginUser(userSubmit);
        return {user};
    }

    @Mutation
    setUser(user:User){this.user = user}

}

export default getModule(UsersModule);