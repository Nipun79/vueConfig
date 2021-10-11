import { createModule, mutation, action, getter, Module, createProxy } from "vuex-class-component";
const VuexModule = createModule({
    namespaced: "Utility",
    strict: false,
})
export class Utility extends VuexModule {
    msg="hello from utility"
}
