import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Método para rolar até a seção
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const topPosition = element.getBoundingClientRect().top + window.scrollY;
      this.smoothScrollTo(topPosition, 1000);
    }
  }

  smoothScrollTo(targetY: number, duration: number) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime: number | null = null;

    function scrollStep(currentTime: number) {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      const percentage = Math.min(progress / duration, 1);
      window.scrollTo(0, startY + distance * (0.5 - 0.5 * Math.cos(Math.PI * percentage)));

      if (progress < duration) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  }
}
