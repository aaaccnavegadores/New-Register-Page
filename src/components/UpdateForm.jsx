import PersonalInfo from './forms/PersonalInfo.jsx'
import AddressInfo from './forms/AddressInfo.jsx'
import ContactInfo from './forms/ContactInfo.jsx'
import AdditionalInfo from './forms/AdditionalInfo.jsx'

export default function UpdateForm({
  register,
  handleSubmit,
  setValue,
  errors,
  onSubmit
}) {
  return (
    <form id='update-form' onSubmit={handleSubmit(onSubmit)}>
      <PersonalInfo register={register} setValue={setValue} errors={errors} />
      <AddressInfo register={register} setValue={setValue} errors={errors} />
      <ContactInfo register={register} setValue={setValue} errors={errors} />
      <AdditionalInfo register={register} errors={errors} />
    </form>
  )
}