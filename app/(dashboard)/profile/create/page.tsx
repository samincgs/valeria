import { Button } from '@/components/ui/button';
import FormInput from '@/components/form/FormInput';
import { SubmitButton } from '@/components/form/Buttons';

const CreateProfilePage = () => {
  const createProfileAction = async (formData: FormData) => {
    'use server';

    const firstName = formData.get('firstName') as string;
    // await new Promise((resolve: any) => setTimeout(resolve, 3000));

    console.log(firstName);
  };

  return (
    <div>
      <h1 className='text-2xl font-semibold mb-8 capitalize '>new user</h1>
      <div className=' max-w-lg border p-8 rounded-md shadow-sm '>
        <form action={createProfileAction}>
          <FormInput name='firstName' type='text' label='first name' />
          <SubmitButton />
        </form>
      </div>
    </div>
  );
};
export default CreateProfilePage;
