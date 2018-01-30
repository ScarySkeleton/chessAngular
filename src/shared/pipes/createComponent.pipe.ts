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

    transform(component: any, container: ViewContainerRef): void {

        if(!component)
            return;

        const _factory = this.componentFactoryResolver.resolveComponentFactory(component);
        const ref = _factory.create(this.injector, [], container);
        this.app.attachView(ref.hostView);
    }
}

export {CreateComponentPipe};
