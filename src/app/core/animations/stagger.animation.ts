import { trigger, transition, style, query, stagger, animate, AnimationTriggerMetadata } from '@angular/animations';

export const staggerFadeIn: AnimationTriggerMetadata = trigger('staggerFadeIn', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(30px)' }),
      stagger('100ms', [
        animate('500ms cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);

export const listAnimation: AnimationTriggerMetadata = trigger('listAnimation', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(20px) scale(0.95)' }),
      stagger('80ms', [
        animate('400ms cubic-bezier(0.4, 0, 0.2, 1)', 
          style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ])
    ], { optional: true })
  ])
]);
