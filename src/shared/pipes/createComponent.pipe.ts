import {Pipe, ViewContainerRef, ViewChild, Inject, Injector, ViewRef, ApplicationRef, PipeTransform} from '@angular/core';
import {ComponentFactoryResolver} from '@angular/core';
import {TemplateRef} from '@angular/core/src/linker/template_ref';

@Pipe({
    name: 'createComponent'
})
class CreateComponentPipe implements PipeTransform {

    private componentFactoryResolver: any;

    constructor(@Inject(ComponentFactoryResolver) factoryResolver,
        private viewContainerRef: ViewContainerRef,
        private injector: Injector,
        private app: ApplicationRef) {
            this.componentFactoryResolver = factoryResolver;
    }

    transform(component: Function, container: any): any {

        if(!component)
            return;

        const _factory = this.componentFactoryResolver.resolveComponentFactory(component);
        
        let _container;
        // *(1) For case when we don't pass a place to insert
        if(!container) {
            _container = document.createElement('div');
        }

        const _ref = _factory.create(this.injector, [], container || _container);
        // *(1)
        if(!container)
            return _ref.location.nativeElement.innerText;
             
    }
}

export {CreateComponentPipe};
