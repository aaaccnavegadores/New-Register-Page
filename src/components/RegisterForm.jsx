import PersonalInfo from './forms/PersonalInfo.jsx'
import AddressInfo from './forms/AddressInfo.jsx'
import ContactInfo from './forms/ContactInfo.jsx'
import CategoryInfo from './forms/CategoryInfo.jsx'
import ActivityInfo from './forms/ActivityInfo.jsx'
import AdditionalInfo from './forms/AdditionalInfo.jsx'

export default function RegisterForm({
  register,
  handleSubmit,
  setValue,
  watch,
  control,
  errors,
  onSubmit
}) {
  return (
    <form id="register-form" onSubmit={handleSubmit(onSubmit)}>
      <PersonalInfo register={register} setValue={setValue} errors={errors} />
      <AddressInfo register={register} setValue={setValue} errors={errors} />
      <ContactInfo register={register} setValue={setValue} errors={errors} />
      <CategoryInfo register={register} control={control} errors={errors} />
      <ActivityInfo
        register={register}
        watch={watch}
        setValue={setValue}
        errors={errors}
      />
      <AdditionalInfo register={register} errors={errors} />
    </form>
  )
}