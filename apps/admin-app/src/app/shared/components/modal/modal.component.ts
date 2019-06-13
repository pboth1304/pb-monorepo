import {
  Component,
  Input,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'pb-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent {
  @Input()
  public contentComponent: any;

  @Input()
  public modalTitle: string;

  @ViewChild('content', { read: ViewContainerRef, static: true })
  public viewContainerRef: ViewContainerRef;

  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver
  ) {}

  public loadContentComponent(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.contentComponent
    );

    // clear container ref
    this.viewContainerRef.clear();

    // create component in content template
    this.viewContainerRef.createComponent(componentFactory);
  }
}
