import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { SectionComponent } from '../section/section.component';

interface ReducedSkill {
  name: string;
  color: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  skills: ReducedSkill[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, SectionComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Portfolio',
      description: 'Personal portfolio website built with Angular',
      image: 'https://www.copytop.com/upload/media/gallery/0001/01/thumb_378_gallery_card.jpeg',
      githubLink: 'https://github.com/yourusername/portfolio',
      skills: [
        {
          name: "Réaliser",
          color: "#3498db",
        },
      ]
    },
    {
      title: 'Maintenance du projet open source Elaastic',
      description: 'Participartion à la maintenance et l\'évolution du projet educatif open source Elaastic',
      image: 'https://elaastic.irit.fr/images/elaastic_logo_rvb.png',
      githubLink: 'https://github.com/iut-tlse3/but3-sae-elaastic-tougaoug',
      skills: [
        {
          name: "Réaliser",
          color: "#3498db",
        },
        {
          name: "Optimiser",
          color: "#3498db",
        },
        {
          name: "Collaborer",
          color: "#3498db",
        },
      ]
    },
    {
      title: 'Création d\'une application de gestion de cabinet médical',
      description: 'Participartion à la maintenance et l\'évolution du projet educatif open source Elaastic',
      image: 'https://webdesign-consulting.fr/wp-content/uploads/2021/08/creation-application-medicale.png',
      githubLink: 'https://github.com/iut-tlse3/but3-sae-elaastic-tougaoug',
      skills: [
        {
          name: "Réaliser",
          color: "#3498db",
        },
        {
          name: "Gérer",
          color: "#3498db",
        },
        {
          name: "Collaborer",
          color: "#3498db",
        },
      ]
    },
    {
      title: 'Création d\'une application de gestion de tournoi e-sport',
      description: 'Participartion à la maintenance et l\'évolution du projet educatif open source Elaastic',
      image: 'https://france3-regions.francetvinfo.fr/image/oodddmv6A4D7UcLd6Y0lNbjHK4Q/1200x675/regions/2022/06/21/62b1f8dcb46a3_image00001.jpeg',
      githubLink: 'https://github.com/iut-tlse3/but3-sae-elaastic-tougaoug',
      skills: [
        {
          name: "Réaliser",
          color: "#3498db",
        },
        {
          name: "Gérer",
          color: "#3498db",
        },
        {
          name: "Collaborer",
          color: "#3498db",
        },
      ]
    },
    {
      title: 'Création d\'une application de gestion de notes',
      description: 'Participartion à la maintenance et l\'évolution du projet educatif open source Elaastic',
      image: 'data:image/jpeg;base64,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',
      githubLink: 'https://github.com/iut-tlse3/but3-sae-elaastic-tougaoug',
      skills: [
        {
          name: "Réaliser",
          color: "#3498db",
        },
        {
          name: "Gérer",
          color: "#3498db",
        },
        {
          name: "Administrer",
          color: "#3498db",
        },
        {
          name: "Collaborer",
          color: "#3498db",
        },
      ]
    },
    {
      title: 'Proxy FTP',
      description: 'Participartion à la maintenance et l\'évolution du projet educatif open source Elaastic',
      image: 'https://www.ryadel.com/wp-content/uploads/2022/11/Proxy-Server-Diagram.png',
      githubLink: 'https://github.com/iut-tlse3/but3-sae-elaastic-tougaoug',
      skills: [
        {
          name: "Réaliser",
          color: "#3498db",
        },
        {
          name: "Administrer",
          color: "#3498db",
        },
      ]
    },
    // Add more projects as needed
  ];
}
