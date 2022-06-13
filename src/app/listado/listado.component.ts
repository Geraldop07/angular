import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  order: boolean = false;
  changeOrder(){
      this.order = !this.order;       
  } 

  public personas = [{
    "id": 1,
    "nombre": "Harbert",
    "ocupacion": "Computer Systems Analyst IV",
    "bio": "Kyoto Prefectural University of Medicine",
    "genero": "Male"
  }, {
    "id": 2,
    "nombre": "Elwood",
    "ocupacion": "Database Administrator III",
    "bio": "Universidade Federal do Maranhão",
    "genero": "Male"
  }, {
    "id": 3,
    "nombre": "Brooks",
    "ocupacion": "Assistant Professor",
    "bio": "Instituto de Artes Visuais, Design e Marketing - IADE",
    "genero": "Male"
  }, {
    "id": 4,
    "nombre": "Ugo",
    "ocupacion": "Geological Engineer",
    "bio": "Central College",
    "genero": "Male"
  }, {
    "id": 5,
    "nombre": "Celisse",
    "ocupacion": "Media Manager IV",
    "bio": "Universidad Metropolitana",
    "genero": "Female"
  }, {
    "id": 6,
    "nombre": "Emmalynn",
    "ocupacion": "GIS Technical Architect",
    "bio": "Urmia University of Medical Sciences",
    "genero": "Female"
  }, {
    "id": 7,
    "nombre": "Lesley",
    "ocupacion": "Structural Engineer",
    "bio": "Universidad Central de Bayamón",
    "genero": "Female"
  }, {
    "id": 8,
    "nombre": "Fredric",
    "ocupacion": "Project Manager",
    "bio": "West Virginia University Institute of Technology",
    "genero": "Male"
  }, {
    "id": 9,
    "nombre": "Madge",
    "ocupacion": "Clinical Specialist",
    "bio": "Alfred Adler Graduate School",
    "genero": "Female"
  }, {
    "id": 10,
    "nombre": "Ulises",
    "ocupacion": "Speech Pathologist",
    "bio": "Adrian College",
    "genero": "Male"
  }, {
    "id": 11,
    "nombre": "Erwin",
    "ocupacion": "Software Test Engineer III",
    "bio": "Jahangirnagar University",
    "genero": "Male"
  }, {
    "id": 12,
    "nombre": "Malchy",
    "ocupacion": "Human Resources Manager",
    "bio": "Espam Formation University",
    "genero": "Male"
  }, {
    "id": 13,
    "nombre": "Hali",
    "ocupacion": "Environmental Specialist",
    "bio": "Jami Institute of Technology",
    "genero": "Female"
  }, {
    "id": 14,
    "nombre": "Allix",
    "ocupacion": "Human Resources Assistant I",
    "bio": "Lutheran School Of Theology In Aarhus",
    "genero": "Female"
  }, {
    "id": 15,
    "nombre": "Harlan",
    "ocupacion": "Financial Analyst",
    "bio": "Shanghai Second Medical University",
    "genero": "Male"
  }, {
    "id": 16,
    "nombre": "Jermayne",
    "ocupacion": "Assistant Media Planner",
    "bio": "University of Education",
    "genero": "Male"
  }, {
    "id": 17,
    "nombre": "Baird",
    "ocupacion": "Financial Analyst",
    "bio": "Elrazi College Of Medical & Technological Sciences",
    "genero": "Male"
  }, {
    "id": 18,
    "nombre": "Mathe",
    "ocupacion": "Web Designer IV",
    "bio": "Bradley University",
    "genero": "Male"
  }, {
    "id": 19,
    "nombre": "Laurette",
    "ocupacion": "Computer Systems Analyst III",
    "bio": "Beijing University of Agriculture",
    "genero": "Female"
  }, {
    "id": 20,
    "nombre": "Rosco",
    "ocupacion": "Senior Developer",
    "bio": "University for Peace",
    "genero": "Male"
  }, {
    "id": 21,
    "nombre": "Porty",
    "ocupacion": "Compensation Analyst",
    "bio": "Lincoln Memorial University",
    "genero": "Male"
  }, {
    "id": 22,
    "nombre": "Georgianna",
    "ocupacion": "Financial Analyst",
    "bio": "Azerbaijan State Oil Academy",
    "genero": "Female"
  }, {
    "id": 23,
    "nombre": "Dosi",
    "ocupacion": "Compensation Analyst",
    "bio": "Illinois State University",
    "genero": "Female"
  }, {
    "id": 24,
    "nombre": "Elbertine",
    "ocupacion": "Nurse",
    "bio": "Our Lady of the Lake University",
    "genero": "Female"
  }, {
    "id": 25,
    "nombre": "King",
    "ocupacion": "Analyst Programmer",
    "bio": "Coe College",
    "genero": "Male"
  }, {
    "id": 26,
    "nombre": "Alford",
    "ocupacion": "Administrative Officer",
    "bio": "Zhongshan University",
    "genero": "Male"
  }, {
    "id": 27,
    "nombre": "Sam",
    "ocupacion": "Business Systems Development Analyst",
    "bio": "Arhangelsk State Technical University",
    "genero": "Male"
  }, {
    "id": 28,
    "nombre": "Karalynn",
    "ocupacion": "GIS Technical Architect",
    "bio": "University of Da Lat",
    "genero": "Female"
  }, {
    "id": 29,
    "nombre": "Royal",
    "ocupacion": "Chemical Engineer",
    "bio": "Taurida National V.I.Vernadsky University",
    "genero": "Male"
  }, {
    "id": 30,
    "nombre": "Burtie",
    "ocupacion": "Automation Specialist IV",
    "bio": "Ulyanovsk State Pedagogical University",
    "genero": "Male"
  }, {
    "id": 31,
    "nombre": "Ossie",
    "ocupacion": "Pharmacist",
    "bio": "National University of Management",
    "genero": "Male"
  }, {
    "id": 32,
    "nombre": "Phedra",
    "ocupacion": "Financial Analyst",
    "bio": "Pace University  Pleasantville/Briarcliff",
    "genero": "Female"
  }, {
    "id": 33,
    "nombre": "Jared",
    "ocupacion": "Systems Administrator IV",
    "bio": "IntelliTec College - Grand Junction",
    "genero": "Male"
  }, {
    "id": 34,
    "nombre": "Hasheem",
    "ocupacion": "Account Representative IV",
    "bio": "Avinashilingam Institute for Home Science and Higher Education for Women",
    "genero": "Male"
  }, {
    "id": 35,
    "nombre": "Damien",
    "ocupacion": "Social Worker",
    "bio": "Holy Cross College",
    "genero": "Male"
  }, {
    "id": 36,
    "nombre": "Benyamin",
    "ocupacion": "Financial Analyst",
    "bio": "Universidad Andina del Cusco",
    "genero": "Male"
  }, {
    "id": 37,
    "nombre": "Jarrett",
    "ocupacion": "Geologist II",
    "bio": "University of Insubria",
    "genero": "Male"
  }, {
    "id": 38,
    "nombre": "Chariot",
    "ocupacion": "Accountant I",
    "bio": "Mongolian State University of Agriculture",
    "genero": "Male"
  }, {
    "id": 39,
    "nombre": "Odette",
    "ocupacion": "Chief Design Engineer",
    "bio": "Universidad de Ciencias y Artes de Chiapas",
    "genero": "Female"
  }, {
    "id": 40,
    "nombre": "Bran",
    "ocupacion": "Compensation Analyst",
    "bio": "Al-Asmarya University for Islamic Studies",
    "genero": "Male"
  }, {
    "id": 41,
    "nombre": "Marjory",
    "ocupacion": "Structural Engineer",
    "bio": "Cleveland Chiropractic College, Los Angeles",
    "genero": "Female"
  }, {
    "id": 42,
    "nombre": "Gaylord",
    "ocupacion": "Actuary",
    "bio": "Université Pierre Mendes-France (Grenoble II)",
    "genero": "Male"
  }, {
    "id": 43,
    "nombre": "Pat",
    "ocupacion": "GIS Technical Architect",
    "bio": "Mansoura University",
    "genero": "Female"
  }, {
    "id": 44,
    "nombre": "Minor",
    "ocupacion": "General Manager",
    "bio": "Hamamatsu University School of Medicine",
    "genero": "Male"
  }, {
    "id": 45,
    "nombre": "Laureen",
    "ocupacion": "Design Engineer",
    "bio": "Pontificio Ateneo Antonianum",
    "genero": "Female"
  }, {
    "id": 46,
    "nombre": "Alejandro",
    "ocupacion": "Human Resources Manager",
    "bio": "Ryukoku University",
    "genero": "Male"
  }, {
    "id": 47,
    "nombre": "Tully",
    "ocupacion": "Junior Executive",
    "bio": "Rostov State Medical University",
    "genero": "Male"
  }, {
    "id": 48,
    "nombre": "Madeline",
    "ocupacion": "Research Assistant III",
    "bio": "Jacobs University Bremen",
    "genero": "Female"
  }, {
    "id": 49,
    "nombre": "Gerik",
    "ocupacion": "Professor",
    "bio": "Waynesburg College",
    "genero": "Male"
  }, {
    "id": 50,
    "nombre": "Anatollo",
    "ocupacion": "Accounting Assistant I",
    "bio": "National Institute of Technology, Warangal",
    "genero": "Male"
  }, {
    "id": 51,
    "nombre": "Katharyn",
    "ocupacion": "Chemical Engineer",
    "bio": "Tokyo Women's Medial College",
    "genero": "Female"
  }, {
    "id": 52,
    "nombre": "Gunner",
    "ocupacion": "Developer II",
    "bio": "Université Kasdi Merbah Ouargla",
    "genero": "Male"
  }, {
    "id": 53,
    "nombre": "Joelly",
    "ocupacion": "Administrative Assistant II",
    "bio": "Zarka Private University",
    "genero": "Female"
  }, {
    "id": 54,
    "nombre": "Winnah",
    "ocupacion": "VP Quality Control",
    "bio": "University of Georgia",
    "genero": "Female"
  }, {
    "id": 55,
    "nombre": "Zsa zsa",
    "ocupacion": "Project Manager",
    "bio": "Staatliche Hochschule für Musik",
    "genero": "Female"
  }, {
    "id": 56,
    "nombre": "Xymenes",
    "ocupacion": "Analyst Programmer",
    "bio": "Fachhochschule Augsburg",
    "genero": "Male"
  }, {
    "id": 57,
    "nombre": "Winny",
    "ocupacion": "Computer Systems Analyst IV",
    "bio": "Franklin Pierce College",
    "genero": "Female"
  }, {
    "id": 58,
    "nombre": "Cody",
    "ocupacion": "Compensation Analyst",
    "bio": "Komsomolsk-on-Amur State Technical University",
    "genero": "Female"
  }, {
    "id": 59,
    "nombre": "Emmy",
    "ocupacion": "Speech Pathologist",
    "bio": "Universidade Regional Integrada do Alto Uruguai e das Missões",
    "genero": "Male"
  }, {
    "id": 60,
    "nombre": "Melba",
    "ocupacion": "Senior Sales Associate",
    "bio": "Iwate Prefectural University",
    "genero": "Female"
  }, {
    "id": 61,
    "nombre": "Valentino",
    "ocupacion": "Mechanical Systems Engineer",
    "bio": "Universidad Nacional de San Martín",
    "genero": "Male"
  }, {
    "id": 62,
    "nombre": "Bethany",
    "ocupacion": "Human Resources Assistant III",
    "bio": "University College of Saint-Boniface",
    "genero": "Female"
  }, {
    "id": 63,
    "nombre": "Freedman",
    "ocupacion": "Accounting Assistant IV",
    "bio": "Kandahar University",
    "genero": "Male"
  }, {
    "id": 64,
    "nombre": "Aurthur",
    "ocupacion": "Teacher",
    "bio": "Royal Academy of Music",
    "genero": "Male"
  }, {
    "id": 65,
    "nombre": "Carine",
    "ocupacion": "VP Accounting",
    "bio": "Taylor's University College",
    "genero": "Female"
  }, {
    "id": 66,
    "nombre": "Peyter",
    "ocupacion": "Administrative Officer",
    "bio": "Bangladesh Agricultural University",
    "genero": "Male"
  }, {
    "id": 67,
    "nombre": "Kimble",
    "ocupacion": "Statistician IV",
    "bio": "Universidad de San Carlos de Guatemala",
    "genero": "Male"
  }, {
    "id": 68,
    "nombre": "Aurea",
    "ocupacion": "Legal Assistant",
    "bio": "Damietta University",
    "genero": "Female"
  }, {
    "id": 69,
    "nombre": "Jermaine",
    "ocupacion": "Structural Engineer",
    "bio": "Meredith College",
    "genero": "Male"
  }, {
    "id": 70,
    "nombre": "Bay",
    "ocupacion": "Registered Nurse",
    "bio": "Eugene Bible College",
    "genero": "Male"
  }, {
    "id": 71,
    "nombre": "Smith",
    "ocupacion": "Marketing Manager",
    "bio": "Adnan Menderes University",
    "genero": "Male"
  }, {
    "id": 72,
    "nombre": "Kevon",
    "ocupacion": "Human Resources Manager",
    "bio": "Politeknik Negeri Bandung",
    "genero": "Male"
  }, {
    "id": 73,
    "nombre": "Boris",
    "ocupacion": "GIS Technical Architect",
    "bio": "Sherman College of Straight Chiropractic",
    "genero": "Male"
  }, {
    "id": 74,
    "nombre": "Haley",
    "ocupacion": "Accountant II",
    "bio": "Aquinas College",
    "genero": "Male"
  }, {
    "id": 75,
    "nombre": "Godiva",
    "ocupacion": "Internal Auditor",
    "bio": "Texas A&M University - Corpus Christi",
    "genero": "Female"
  }, {
    "id": 76,
    "nombre": "Wake",
    "ocupacion": "Project Manager",
    "bio": "University of Texas at El Paso",
    "genero": "Male"
  }, {
    "id": 77,
    "nombre": "Derril",
    "ocupacion": "Mechanical Systems Engineer",
    "bio": "St. Pauls University",
    "genero": "Male"
  }, {
    "id": 78,
    "nombre": "Lazare",
    "ocupacion": "Nurse Practicioner",
    "bio": "Full Sail University",
    "genero": "Male"
  }, {
    "id": 79,
    "nombre": "Langsdon",
    "ocupacion": "Community Outreach Specialist",
    "bio": "Université Virtuelle de Tunis",
    "genero": "Male"
  }, {
    "id": 80,
    "nombre": "Gwenni",
    "ocupacion": "Executive Secretary",
    "bio": "Dalian Polytechnic University",
    "genero": "Female"
  }, {
    "id": 81,
    "nombre": "Milicent",
    "ocupacion": "Graphic Designer",
    "bio": "Technical University of Radom",
    "genero": "Female"
  }, {
    "id": 82,
    "nombre": "Davidde",
    "ocupacion": "Geologist III",
    "bio": "Hong Kong Academy for Performing Arts ",
    "genero": "Male"
  }, {
    "id": 83,
    "nombre": "Gaby",
    "ocupacion": "Financial Advisor",
    "bio": "Ilia Chavchavadze State University",
    "genero": "Male"
  }, {
    "id": 84,
    "nombre": "Ardisj",
    "ocupacion": "Legal Assistant",
    "bio": "Art Academy of Cincinnati",
    "genero": "Female"
  }, {
    "id": 85,
    "nombre": "Harri",
    "ocupacion": "Pharmacist",
    "bio": "Yanbian University",
    "genero": "Female"
  }, {
    "id": 86,
    "nombre": "Netty",
    "ocupacion": "Marketing Assistant",
    "bio": "Université de Franche-Comté",
    "genero": "Female"
  }, {
    "id": 87,
    "nombre": "Romain",
    "ocupacion": "Information Systems Manager",
    "bio": "New Mexico Institute of Mining and Technology",
    "genero": "Male"
  }, {
    "id": 88,
    "nombre": "Robina",
    "ocupacion": "General Manager",
    "bio": "Grinnell College",
    "genero": "Female"
  }, {
    "id": 89,
    "nombre": "Nancee",
    "ocupacion": "Web Designer I",
    "bio": "Escuela Colombiana de Ingeniería Julio Garavito",
    "genero": "Female"
  }, {
    "id": 90,
    "nombre": "Zilvia",
    "ocupacion": "Professor",
    "bio": "University of Alabama - Huntsville",
    "genero": "Female"
  }, {
    "id": 91,
    "nombre": "Vernen",
    "ocupacion": "Structural Engineer",
    "bio": "Institut Supérieure d'Electronique de Paris",
    "genero": "Male"
  }, {
    "id": 92,
    "nombre": "Ardyth",
    "ocupacion": "Assistant Professor",
    "bio": "Christian Heritage College",
    "genero": "Female"
  }, {
    "id": 93,
    "nombre": "Sena",
    "ocupacion": "Cost Accountant",
    "bio": "Instituto Superior de Ciências do Trabalho e da Empresa",
    "genero": "Female"
  }, {
    "id": 94,
    "nombre": "Hieronymus",
    "ocupacion": "Structural Analysis Engineer",
    "bio": "Universidad Nacional Siglo XX Llallagua",
    "genero": "Male"
  }, {
    "id": 95,
    "nombre": "Esra",
    "ocupacion": "Registered Nurse",
    "bio": "University of Nebraska - Lincoln",
    "genero": "Male"
  }, {
    "id": 96,
    "nombre": "Kiah",
    "ocupacion": "Programmer Analyst II",
    "bio": "Universidad Nacional de San Cristóbal de Huamanga",
    "genero": "Female"
  }, {
    "id": 97,
    "nombre": "Gaby",
    "ocupacion": "Structural Engineer",
    "bio": "Kursk State University",
    "genero": "Male"
  }, {
    "id": 98,
    "nombre": "Tim",
    "ocupacion": "Staff Accountant II",
    "bio": "Hajvery University Lahore for Women",
    "genero": "Male"
  }, {
    "id": 99,
    "nombre": "Halsey",
    "ocupacion": "VP Sales",
    "bio": "South Bank University",
    "genero": "Male"
  }, {
    "id": 100,
    "nombre": "Feliza",
    "ocupacion": "Assistant Professor",
    "bio": "Pedagogical University of the Polish Association for Adult Education in Warsaw",
    "genero": "Female"
  }]

  

  delete(id: number) {
    const index = this.personas.findIndex( p => p.id === id);
    this.personas.splice(index, 1)
  }

}
