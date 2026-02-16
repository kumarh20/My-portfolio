import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { fadeInUp } from '../../core/animations/fade-in.animation';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SectionTitleComponent, ButtonComponent],
  animations: [fadeInUp],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  // EmailJS Configuration
  // TODO: Replace these with your actual EmailJS credentials from https://www.emailjs.com/
  private readonly EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
  private readonly EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  private readonly EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'hemantkumarskh@gmail.com',
      link: 'mailto:hemantkumarskh@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 9752466268',
      link: 'tel:+919752466268'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'India',
      link: null
    }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get nameControl() {
    return this.contactForm.get('name');
  }

  get emailControl() {
    return this.contactForm.get('email');
  }

  get messageControl() {
    return this.contactForm.get('message');
  }

  hasError(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  getErrorMessage(controlName: string): string {
    const control = this.contactForm.get(controlName);
    
    if (control?.hasError('required')) {
      return `${this.capitalizeFirst(controlName)} is required`;
    }
    
    if (control?.hasError('email')) {
      return 'Please enter a valid email address';
    }
    
    if (control?.hasError('minlength')) {
      const minLength = control.errors?.['minlength'].requiredLength;
      return `Minimum ${minLength} characters required`;
    }
    
    return '';
  }

  private capitalizeFirst(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    try {
      // Initialize EmailJS
      emailjs.init(this.EMAILJS_PUBLIC_KEY);

      // Prepare email parameters
      const templateParams = {
        from_name: this.contactForm.value.name,
        from_email: this.contactForm.value.email,
        message: this.contactForm.value.message,
        to_email: 'hemantkumarskh@gmail.com', // Your email
        reply_to: this.contactForm.value.email
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('Email sent successfully!', response.status, response.text);
      
      this.submitSuccess = true;
      this.contactForm.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    } catch (error: any) {
      console.error('Failed to send email:', error);
      this.submitError = true;
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        this.submitError = false;
      }, 5000);
    } finally {
      this.isSubmitting = false;
    }
  }
}
