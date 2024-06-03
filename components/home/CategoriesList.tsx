import Link from 'next/link';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { categories } from '@/utils/categories';
import { cn } from '@/lib/utils';

type CategoriesListProps = {
  category?: string;
  search?: string;
};

const CategoriesList = ({ category, search }: CategoriesListProps) => {
  const searchTerm = search ? `&search=${search}` : '';
  return (
    <ScrollArea className='py-6'>
      <div className='flex gap-x-4 items-center'>
        {categories.map((item) => (
          <Link key={item.label} href={`/?category=${item.label}${searchTerm}`}>
            <div
              className={cn(
                'p-3 flex flex-col items-center cursor-pointer duration-300 hover:text-primary w-[100px] ',
                item.label === category ? 'text-primary' : ''
              )}
            >
              <item.icon className='w-8 h-8' />
              <p className='capitalize text-sm mt-1'>{item.label}</p>
            </div>
          </Link>
        ))}
      </div>
      <ScrollBar orientation='horizontal' />
    </ScrollArea>
  );
};
export default CategoriesList;
