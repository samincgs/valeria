import { IconType } from 'react-icons/lib';
import { MdCabin, MdAirportShuttle, MdCottage } from 'react-icons/md';
import { TbTent, TbCaravan } from 'react-icons/tb';
import { PiLighthouse, PiWarehouse } from 'react-icons/pi';
import { GoContainer } from 'react-icons/go';
import { GiMushroomHouse, GiWoodCabin } from 'react-icons/gi';

type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export type CategoryLabel =
  | 'cabin'
  | 'tent'
  | 'airstream'
  | 'cottage'
  | 'container'
  | 'caravan'
  | 'tiny'
  | 'magic'
  | 'warehouse'
  | 'lodge';

export const categories: Category[] = [
  {
    label: 'cabin',
    icon: MdCabin,
  },
  {
    label: 'tent',
    icon: TbTent,
  },
  {
    label: 'airstream',
    icon: MdAirportShuttle,
  },
  {
    label: 'cottage',
    icon: MdCottage,
  },
  {
    label: 'container',
    icon: GoContainer,
  },
  {
    label: 'caravan',
    icon: TbCaravan,
  },
  {
    label: 'tiny',
    icon: PiLighthouse,
  },
  {
    label: 'magic',
    icon: GiMushroomHouse,
  },
  {
    label: 'warehouse',
    icon: PiWarehouse,
  },
  {
    label: 'lodge',
    icon: GiWoodCabin,
  },
];
