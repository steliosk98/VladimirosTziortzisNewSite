export type Sponsor = {
  name: string;
  subtitle?: string;
  logo: string;
  url: string;
};

export const platinum: Sponsor[] = [
  { name: 'Capital.com', logo: '/images/capital-400x400.jpg', url: 'http://www.capital.com/' },
];

export const sponsors: Sponsor[] = [
  { name: 'ISX Financial', logo: '/images/isx-400x400.jpg', url: 'https://www.isx.financial/' },
  { name: 'PaidBy', logo: '/images/paidby-400x400.jpg', url: 'https://www.paidby.eu/' },
];

export const broadcast: Sponsor[] = [
  { name: 'Cytavision', logo: '/images/cytavision-510x510.jpg', url: 'https://www.cyta.com.cy/personal/el' },
];

export const supporters: Sponsor[] = [
  { name: 'ALCO Filters', logo: '/images/alco-492x267.jpg', url: 'https://www.alcofilters.com/en-gb/home/' },
  { name: 'ENEOS', subtitle: 'Motor Oil', logo: '/images/screenshot-2021-03-05-at-21-491x265.jpg', url: 'https://eneoseurope.com/' },
  { name: 'Televantos', subtitle: 'Used Trucks LTD', logo: '/images/televantos-492x267.png', url: 'http://www.televantos.com/Default.aspx' },
  { name: 'Psaltis', subtitle: 'Auto Parts', logo: '/images/screenshot-2021-03-05-at-21-2-492x266.jpg', url: 'https://www.psaltis.com.cy/' },
  { name: 'Sana Hiltonia', logo: '/images/sana-492x267.png', url: 'https://www3.hilton.com/en/hotels/cyprus/hilton-nicosia-NICLEHI/index.html' },
  { name: 'A. Tziortzis Car Service LTD', logo: '/images/atz-492x267.png', url: 'https://www.facebook.com/Atziortzis-CAR-Services-LTD-1438028759821745/' },
  { name: 'Daytona', subtitle: 'Raceway', logo: '/images/daytona-492x267.png', url: 'http://www.daytona.com.cy/' },
];

export const socialMediaSupporter: Sponsor[] = [
  { name: '357.digital', subtitle: 'Digital Services', logo: '/images/screenshot-2021-11-19-at-11.27.33-492x268.jpg', url: 'https://357.digital' },
];
