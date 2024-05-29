import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.animateIntro();
  }

  animateIntro(): void {
    const tl = gsap.timeline();
    tl.to("#blackScreen", {
      opacity: 1,
      duration: 0.5,
      ease: "power2.inOut",
    });
    tl.to("#blackScreen", {
      duration: 1,
      ease: "power2.inOut",
    });
    tl.to("#blackScreen", {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        document.getElementById('blackScreen')?.remove();
      }
    });
    tl.fromTo(".container, .animationfirst-container, .secondanimation-container, .thirdanimation-container",
      { opacity: 0, scale: 0.5, rotationY: -90 },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1.5,
        stagger: 0.2,
      }
    );
    gsap.from(".image-container img", {
      opacity: 0.6,
      scale: 0.1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".image-container",
        start: "top 60%",
        end: "bottom 30%",
        toggleActions: "play none none none",
      },
    });
    gsap.from(".text-container", {
      opacity: 0,
      x: -50,
      duration: 5.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".text-container",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });
    gsap.from(".animation-firstitem img", {
      opacity: 0.3,
      scale: 0.9,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".animationfirst-container",
        start: "top 60%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });
    gsap.from(".secondanimation-container .animation-seconditem", {
      opacity: 0.3,
      y: 50,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".secondanimation-container",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });
    gsap.from(".thirdanimation-container .animation-thirditem", {
      opacity: 0.3,
      x: 50,
      scale: 0.8,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".thirdanimation-container",
        start: "top 60%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });
  }

}