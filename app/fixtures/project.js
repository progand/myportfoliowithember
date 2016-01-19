/**
 * Created by user on 10/13/15.
 */

var RAW_PROJECT_DATA = [
  {
    id: 'roomlr',
    name: 'Roomlr',
    url: 'https://www.roomlr.com/',
    description: `Roomlr is a worldwide search engine for every type of holiday home or apartment. Whatever you may wish to rent – chalet, houseboat, apartment or entire house – you'll find it here.`,
    image: '/img/projects/roomlr/roomlr.jpg',
    technologies: [
      'jQuery',
      'Backbone',
      'jQueryUI',
      'Bootstrap',
      'Google Maps API'
    ],
    images: ['/img/projects/roomlr/home.jpg', '/img/projects/roomlr/list.jpg', '/img/projects/roomlr/apartment.jpg']

  }, {
    id: 'livarava',
    name: 'LivaRava',
    url: 'https://www.livarava.com/',
    description: `Online service that helps systematize and organize information (text, images, audio, video, etc..), share with your friends.`,
    image: '/img/projects/livarava/livarava.jpg',
    technologies: [
      'jQuery',
      'ES6',
      'Bootstrap',
      'jQueryUI',
      'Gulp'
    ],
    images: ['/img/projects/livarava/home.jpg', '/img/projects/livarava/neuron.jpg', '/img/projects/livarava/feed.jpg']
  }, {
    id: 'prostir',
    name: 'Портал “Громадський простір” ',
    url: 'http://www.prostir.ua/',
    description: `Projects of IAC "Civic Space" are reliable information channels for Ukrainian stakeholders. Among the recipients of our information are known institutions: Governments, Delegation of the European Union to Ukraine, UNDP in Ukraine, foreign embassies, local governments, Ministries and departments, key media of the country. Among the active projects of the Center are: - Portal "Civic Space"`,
    image: '/img/projects/prostir/prostir.jpg',
    technologies: [
      'jQuery',
      'Wordpress'
    ],
    images: ['/img/projects/prostir/home.jpg', '/img/projects/prostir/news.jpg', '/img/projects/prostir/organizations.jpg', '/img/projects/prostir/calendar.jpg']
  }, {
    id: 'mezhynska',
    name: 'Kristina Mezhynskaya – official site',
    url: 'http://www.kristinamezhynskaya.com/',
    description: `Portfolio of beautiful ukrainian singer Kristina Mezhynskaya.`,
    image: '/img/projects/mezhynska/mezhynska.jpg',
    technologies: [
      'jQuery',
      'Wordpress',
      'Bootstrap'
    ],
    images: ['/img/projects/mezhynska/home.jpg','/img/projects/mezhynska/photo.jpg','/img/projects/mezhynska/albums.jpg','/img/projects/mezhynska/video.jpg','/img/projects/mezhynska/contacts.jpg']

  }, {
    id: 'portfolio',
    name: 'My Portfolio',
    url: window.location.protocol + '//' + window.location.host,
    description: `My portfolio - you are already here! That's why no images provided.`,
    image: '/img/projects/roomlr/roomlr.jpg',
    technologies: [
      'ES6',
      'Ember',
      'Bootstrap'
    ],
    images: []

  },
  {
    id: 'zbaranskyi',
    name: `Anatoliy Zbaranskyi – official site`,
    url: window.location.protocol + '//' + window.location.host,
    description: `The web-site contains few painter's galleries and some additional information. It's based on pure PHP, no framework were used.`,
    image: '/img/projects/roomlr/roomlr.jpg',
    technologies: [
      'PHP',
      'jQuery'
    ],
    images: ['/img/projects/zbaranskyi/home.jpg', '/img/projects/zbaranskyi/gallery.jpg', '/img/projects/zbaranskyi/picture.jpg']

  }
];


var RAW_TECHNOLOGIES_DATA = _.chain(RAW_PROJECT_DATA).reduce((techs, project) => {
  if (project.technologies) {
    project.technologies.forEach(technology => {
      if (!techs[technology]) {
        techs[technology] = {id: String(technology).toLowerCase(), name: technology, used: 0};
      }
      techs[technology]['used'] += 1;
    });
  }
  return techs;
}, {})/*.sortBy(technology => -1 * technology.used)*/.value();

var TECHNOLOGIES = _.chain(RAW_TECHNOLOGIES_DATA)
  .sortBy(technology => -1 * technology.used)
  .each(technology => {
    technology.projects = RAW_PROJECT_DATA.filter((project) => {
      if (project.technologies) {
        return project.technologies.contains(technology.name);
      }
    });
  })
  .value();

var PROJECTS = RAW_PROJECT_DATA.map(function (project) {
  project.technologies = project.technologies.map(technology => {
    return _.find(TECHNOLOGIES, item => item.name === technology);
  });
  return project;
});

export {PROJECTS, TECHNOLOGIES};
