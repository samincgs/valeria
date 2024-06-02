import { SubmitButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import { createPropertyAction } from '@/utils/actions';

const CreateRentalsPage = () => {
  return (
    <div>
      <h1 className='text-2xl font-semibold mb-8 capitalize '>
        create property
      </h1>
      <div className='border max-w-6xl p-8 rounded-md shadow-sm '>
        <h3 className='text-xl mb-6 font-medium capitalize'>general info</h3>
        <FormContainer action={createPropertyAction}>
          <div className='grid md:grid-cols-2 gap-8 mb-4'>
            <FormInput
              name='name'
              type='text'
              label='name (20 limit)'
              defaultValue='Cabin in Latvia'
            />
            <FormInput
              name='tagline'
              type='text'
              label='tagline (30 limit)'
              defaultValue='Dream Getaway Awaits You Here'
            />
            {/* price */}
            {/* categories */}
          </div>
          {/* text area/ description */}
          <SubmitButton text='create rental' className='mt-12' />
        </FormContainer>
      </div>
    </div>
  );
};
export default CreateRentalsPage;
