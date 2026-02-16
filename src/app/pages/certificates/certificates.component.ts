import { Component, OnInit, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { fadeInUp } from '../../core/animations/fade-in.animation';
import { listAnimation } from '../../core/animations/stagger.animation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  pdfUrl: string;
  thumbnail?: string;
}

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  animations: [fadeInUp, listAnimation],
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit, AfterViewInit, OnDestroy {
  certificates: Certificate[] = [
    {
      id: '1',
      title: 'Appreciation Certificate',
      issuer: 'Company/Organization',
      date: '2024',
      description: 'Certificate of appreciation for outstanding performance and contribution to the project.',
      pdfUrl: 'assets/certificates/appriciation1.pdf',
      thumbnail: 'assets/images/hk.jpeg'
    },
    {
      id: '2',
      title: 'JavaScript Certification',
      issuer: 'HackerRank',
      date: '2023',
      description: 'Certified JavaScript developer demonstrating proficiency in JavaScript programming.',
      pdfUrl: 'assets/certificates/Hemant kumar Sahu (1).pdf',
      thumbnail: 'assets/images/hk1.jpeg'
    }
  ];

  selectedCertificate: Certificate | null = null;
  isModalOpen = false;

  constructor(private sanitizer: DomSanitizer) {}

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isModalOpen) {
      this.closeCertificate();
    }
  }

  ngOnInit(): void {
    // Component initialization
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializeScrollAnimations();
      ScrollTrigger.refresh();
    }, 100);
  }

  ngOnDestroy(): void {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }

  private initializeScrollAnimations(): void {
    gsap.from('.certificate-card', {
      scrollTrigger: {
        trigger: '.certificates-grid',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 50,
      scale: 0.95,
      stagger: 0.15,
      duration: 0.6,
      ease: 'power2.out'
    });
  }

  getSafeUrl(url: string): SafeResourceUrl {
    // Add #zoom=page-fit to make PDF fit better in iframe
    return this.sanitizer.bypassSecurityTrustResourceUrl(`${url}#zoom=page-fit`);
  }

  viewCertificate(certificate: Certificate): void {
    this.selectedCertificate = certificate;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeCertificate(): void {
    this.isModalOpen = false;
    setTimeout(() => {
      this.selectedCertificate = null;
    }, 200);
    document.body.style.overflow = 'auto';
  }

  downloadCertificate(certificate: Certificate, event?: MouseEvent): void {
    if (event) {
      event.stopPropagation();
    }
    const link = document.createElement('a');
    link.href = certificate.pdfUrl;
    link.download = `${certificate.title.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
