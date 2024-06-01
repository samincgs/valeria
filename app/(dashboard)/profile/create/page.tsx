import FormInput from '@/components/form/FormInput';
import FormContainer from '@/components/form/FormContainer';
import { SubmitButton } from '@/components/form/Buttons';
import { createProfileAction } from '@/utils/actions';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const CreateProfilePage = async () => {
  const user = await currentUser();
  if (user?.privateMetadata?.hasProfile) {
    redirect('/');
  }
  return (
    <div>
      <h1 className='text-2xl font-semibold mb-8 capitalize '>new user</h1>
      <div className='border max-w-6xl p-8 rounded-md shadow-sm '>
        <FormContainer action={createProfileAction}>
          <div className='grid md:grid-cols-2 gap-4 mt-4'>
            <FormInput name='firstName' type='text' label='first name' />
            <FormInput name='lastName' type='text' label='last name' />
            <FormInput name='username' type='text' />
          </div>
          <SubmitButton text='create profile' className='mt-4' />
        </FormContainer>
      </div>
    </div>
  );
};
export default CreateProfilePage;
