import { IconType } from 'react-icons/lib';
import {
  FiCloud,
  FiTruck,
  FiZap,
  FiWind,
  FiSun,
  FiCoffee,
  FiFeather,
  FiAirplay,
  FiTrello,
  FiBox,
  FiAnchor,
  FiDroplet,
  FiMapPin,
  FiSunrise,
  FiSunset,
  FiMusic,
  FiHeadphones,
  FiRadio,
  FiFilm,
  FiTv,
} from 'react-icons/fi';
import {
  GiCampfire,
  GiForkKnifeSpoon,
  GiLanternFlame,
  GiPersonInBed,
} from 'react-icons/gi';
import { MdOutdoorGrill, MdBathroom } from 'react-icons/md';
import { RiSofaLine } from 'react-icons/ri';
import { PiToiletLight, PiPicnicTable } from 'react-icons/pi';
import { FaBriefcaseMedical, FaHotjar, FaWater } from 'react-icons/fa';

export type Amenity = {
  name: string;
  icon: IconType;
  selected: boolean;
};

export const amenities: Amenity[] = [
  {
    name: 'cloud storage',
    icon: FiCloud,
    selected: false,
  },
  {
    name: 'parking',
    icon: FiTruck,
    selected: false,
  },
  {
    name: 'fire pit',
    icon: GiCampfire,
    selected: false,
  },
  {
    name: 'bbq grill',
    icon: MdOutdoorGrill,
    selected: false,
  },
  {
    name: 'outdoor furniture',
    icon: RiSofaLine,
    selected: false,
  },
  {
    name: 'private bathroom',
    icon: PiToiletLight,
    selected: false,
  },
  {
    name: 'hot shower',
    icon: MdBathroom,
    selected: false,
  },
  {
    name: 'kitchenette',
    icon: FiAirplay,
    selected: false,
  },
  {
    name: 'heating',
    icon: FaHotjar,
    selected: false,
  },
  {
    name: 'air conditioning',
    icon: FiBox,
    selected: false,
  },
  {
    name: 'bed linens',
    icon: FiAnchor,
    selected: false,
  },
  {
    name: 'towels',
    icon: FiDroplet,
    selected: false,
  },
  {
    name: 'picnic table',
    icon: PiPicnicTable,
    selected: false,
  },
  {
    name: 'hammock',
    icon: GiPersonInBed,
    selected: false,
  },
  {
    name: 'solar power',
    icon: FiSunset,
    selected: false,
  },
  {
    name: 'water supply',
    icon: FaWater,
    selected: false,
  },
  {
    name: 'cooking utensils',
    icon: GiForkKnifeSpoon,
    selected: false,
  },
  {
    name: 'cool box',
    icon: FiRadio,
    selected: false,
  },
  {
    name: 'lanterns',
    icon: GiLanternFlame,
    selected: false,
  },
  {
    name: 'first aid kit',
    icon: FaBriefcaseMedical,
    selected: false,
  },
];
