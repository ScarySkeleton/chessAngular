import {Pipe, ViewContainerRef, ViewChild, Inject, Injector, ViewRef, ApplicationRef} from '@angular/core';
import {ComponentFactoryResolver} from '@angular/core';
import {TemplateRef} from '@angular/core/src/linker/template_ref';

@Pipe({
    name: 'createComponent'
})
class CreateComponentPipe {

    private componentFactoryResolver: any;

    constructor(@Inject(ComponentFactoryResolver) factoryResolver,
        private viewContainerRef: ViewContainerRef,
        private injector: Injector,
        private app: ApplicationRef) {
            this.componentFactoryResolver = factoryResolver;
    }

    transform(component: any, container: ViewContainerRef, ...args: any[]): any {

        if(!component)
            return;

        //console.log('cint', component, container);
        //console.log(this.viewContainerRef.createComponent(container))

        const _factory = this.componentFactoryResolver.resolveComponentFactory(component);
        //const _component = _factory.create(this.injector);
        //const view = _component.hostView;
        console.log( _factory, container as ViewContainerRef);
        
        const ref = _factory.create(this.injector, [], container);
        this.app.attachView(ref.hostView);

        //container.clear();
        // let componentRef = _factory.create(this.injector);
        // let view = componentRef.hostView;
        // console.log(view, this.injector, componentRef);


        //return _component;
    }
}

export {CreateComponentPipe};
