import Hangout from '../models/hangout';
import User from '../models/user';

export const HANGOUTS = [
  new Hangout('c1', 'USC Trojans', 'College Campus', 'Are you a student, staff, or fan of this college. Good. Post your content here why dont you.', '@usc', 'https://res.cloudinary.com/spachbox/image/upload/v1657737149/AnyFans/usc-football_gybjq7.webp', '#ffc7ff'),
  new Hangout('c2', 'Notre Dame Fighting Irish', 'College Campus',  'Are you a student, staff, or fan of this college. Good. Post your content here why dont you.', '@notredame', 'https://res.cloudinary.com/spachbox/image/upload/v1657737149/AnyFans/usc-football_gybjq7.webp', '#f54242'),
  new Hangout('c3', 'UCSB Gauchos', 'College Campus',  'Are you a student, staff, or fan of this college. Good. Post your content here why dont you.', '@ucsb', 'https://res.cloudinary.com/spachbox/image/upload/v1657737149/AnyFans/usc-football_gybjq7.webp', '#f5a442'),
  new Hangout('c4', 'Cal Berkley Bears', 'College Campus',  'Are you a student, staff, or fan of this college. Good. Post your content here why dont you.', '@calberkley', 'https://res.cloudinary.com/spachbox/image/upload/v1657737149/AnyFans/usc-football_gybjq7.webp', '#f5d142'),
  new Hangout('c5', 'Fresno State Bulldogs', 'College Campus',  'Are you a student, staff, or fan of this college. Good. Post your content here why dont you.', '@csufresno', 'https://res.cloudinary.com/spachbox/image/upload/v1657737149/AnyFans/usc-football_gybjq7.webp', '#368dff'),
  new Hangout('c6', 'CSUF Titans', 'College Campus',  'Are you a student, staff, or fan of this college. Good. Post your content here why dont you.', '@csufullerton', 'https://res.cloudinary.com/spachbox/image/upload/v1657737149/AnyFans/usc-football_gybjq7.webp', '#41d95d'),
  new Hangout('c7', 'UC Davis Mustangs', 'College Campus',  'Are you a student, staff, or fan of this college. Good. Post your content here why dont you.', '@ucdavis', 'https://res.cloudinary.com/spachbox/image/upload/v1657737149/AnyFans/usc-football_gybjq7.webp', '#9eecff'),
  new Hangout('c8', 'UCLA Bruins', 'College Campus',  'Are you a student, staff, or fan of this college. Good. Post your content here why dont you.', '@ucla', 'https://res.cloudinary.com/spachbox/image/upload/v1657737149/AnyFans/usc-football_gybjq7.webp', '#b9ffb0'),
  new Hangout('c9', 'Cal Poly SLO Mustangs', 'College Campus',  'Are you a student, staff, or fan of this college. Good. Post your content here why dont you.', '@calpolyslo', 'https://res.cloudinary.com/spachbox/image/upload/v1657737149/AnyFans/usc-football_gybjq7.webp', '#ffc7ff'),
  new Hangout('c10', 'Cal Poly Pomona Broncos', 'College Campus',  'Are you a student, staff, or fan of this college. Good. Post your content here why dont you.', '@calpolypomona', 'https://res.cloudinary.com/spachbox/image/upload/v1657737149/AnyFans/usc-football_gybjq7.webp', '#47fced')
];

export const USERS = [
	new User(
    'm0',
    null,
    'Jimbo Jimberson',
    'tinkywinky',
    null,
    'https://res.cloudinary.com/spachbox/image/upload/v1609801258/mvybkl8lxpwuqvl4i35ajgkl2228.jpg',
    'Break me off a piece of that kit kat bar.'
  ),

  new User(
    'm1',
    ['c1', 'c2'],
    'Jimbo Patterson',
    'jimbo',
    ['c1', 'c2'],
    'https://res.cloudinary.com/spachbox/image/upload/v1609801256/gxt7b03gmndghqzpm3xnj6zxa1nl.jpg',
    'I like to move it move it',
  ),

  new User(
    'm2',
    ['c2'],
    'Minto Mionterson',
    'minto_m',
    ['c2'],
    'https://res.cloudinary.com/spachbox/image/upload/v1609801256/gxt7b03gmndghqzpm3xnj6zxa1nl.jpg',
    'Lorem ipsum long as bio marco carco this is my bio. Let me tell you a little bit about how this boy got born and raised south Phiolidelphia where I spent most of my days. Chillin out lax.'
  ),

  new User(
    'm3',
    ['c3'],
    'Chimpo Rimberson',
    'chimporimberson',
    ['c3'],
    'https://res.cloudinary.com/spachbox/image/upload/v1609789605/nac1hkn2giunaigaht6xkx578duv.jpg',
    'Couple opf boys that were up to no good started making trouble in my neighborshodd. I got in one little fight and my mom got scared.'
  ),

  new User(
    'm4',
    ['c4'],
    'Teslo Teslacoil',
    'teslacoil',
    ['c4'],
    'https://res.cloudinary.com/spachbox/image/upload/v1609789605/nac1hkn2giunaigaht6xkx578duv.jpg',
    'Getting jiggy with it. Nah nah nah nah na nah na.'
  ),

  new User(
    'm5',
    ['c2', 'c5', 'c10'],
    'Salad Salmonson',
    'saldi',
    ['c5', 'c10'],
    'https://res.cloudinary.com/spachbox/image/upload/v1620358932/8z7bgahkno5q5dc0r5pusd87nzjc.jpg',
    'When I was born there was a rainbow formed with no sun. ROYGBIV marking the opath of the chaosen one.'
  ),

  new User(
    'm6',
    ['c6', 'c10'],
    'Marco Murphysons',
    'murph',
    ['c6'],
    'https://res.cloudinary.com/spachbox/image/upload/v1620358932/8z7bgahkno5q5dc0r5pusd87nzjc.jpg',
    'An angel (my grangma) told me before she dies that smart folks dont need to put no cursin\' in they rhymes.'
  ),

  new User(
    'm7',
    ['c7'],
    'Nitwit Ridgerstone',
    'nitridge',
    ['c7'],
    'https://res.cloudinary.com/spachbox/image/upload/v1606798644/cho324ntt00m3p0yhnyezbupdiym.jpg',
    'In a large bowl, sift together the flour, baking powder, salt and sugar.'
  ),

  new User(
    'm8',
    ['c8'],
    'Chickbot Linkerstrong',
    'chickbot',
    ['c8'],
    'https://res.cloudinary.com/spachbox/image/upload/v1606798644/cho324ntt00m3p0yhnyezbupdiym.jpg',
    'Here come the butta baby, I bring it smoove and hot.'
  ),

  new User(
    'm9',
    ['c9'],
    'Chocolatey Souffleferstone',
    'souff',
    ['c9'],
    'https://res.cloudinary.com/spachbox/image/upload/v1606798644/cho324ntt00m3p0yhnyezbupdiym.jpg',
    'Here it comes the party of a lifetime. 31st of December man I remeber when the ball dropped for \'90 but that was not nah, its ten years behind me. What\'s gonna happen dont nobody know. Right when the clock gets to 12 oh oh.'
  ),
  new User(
    'm10',
    ['c2', 'c5', 'c10'],
    'Maria Beth Jones',
    'mbj',
    ['c2', 'c5'],
    'https://res.cloudinary.com/spachbox/image/upload/v1606798644/cho324ntt00m3p0yhnyezbupdiym.jpg',
    'Chaos, cops gonna block the srteets. Who the heck cares just don\'t stop the beat.'
  )
];