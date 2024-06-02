import { SubmitButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import ImageInputContainer from '@/components/form/ImageInputContainer';
import {
  fetchProfile,
  updateProfileAction,
  updateProfileImageAction,
} from '@/utils/actions';

const ProfilePage = async () => {
  const profile = await fetchProfile();
  return (
    <div>
      <h1 className='text-2xl font-semibold mb-8 capitalize '>user profile</h1>

      <div className='border max-w-6xl p-8 rounded-md shadow-sm '>
        <ImageInputContainer
          image={profile.profileImage}
          name={profile.username}
          text='update profile image'
          action={updateProfileImageAction}
        />
        <FormContainer action={updateProfileAction}>
          <div className='grid md:grid-cols-2 gap-4 mt-4'>
            <FormInput
              name='firstName'
              type='text'
              label='first name'
              defaultValue={profile.firstName}
            />
            <FormInput
              name='lastName'
              type='text'
              label='last name'
              defaultValue={profile.lastName}
            />
            <FormInput
              name='username'
              type='text'
              defaultValue={profile.username}
            />
          </div>
          <SubmitButton text='update profile' className='mt-4' />
        </FormContainer>
      </div>
    </div>
  );
};
export default ProfilePage;
