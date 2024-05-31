import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const CreateProfilePage = () => {
  const createProfileAction = async (formData: FormData) => {
    'use server';

    const firstName = formData.get('firstName') as string;
    console.log(firstName);
  };

  return (
    <div>
      <h1 className='text-2xl font-semibold mb-8 capitalize '>new user</h1>
      <div className=' max-w-lg border p-8 rounded-md shadow-sm '>
        <form action={createProfileAction}>
          <div className='flex flex-col gap-3'>
            <Label htmlFor='firstName' className='text-lg tracking-wide'>
              First Name
            </Label>
            <Input type='text' id='firstName' name='firstName' />
          </div>
          <Button type='submit' size='lg' className='mt-6'>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};
export default CreateProfilePage;
