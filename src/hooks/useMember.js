import { useState } from 'react'
import { getMemberByDocument, createMember, updateMember } from '../services/memberService.js'
import { updateMemberPayload, crateMemberPayload } from '../mappers/memberMapper.js'

export function useMember() {
  const [member, setMember] = useState(null)
  const [error, setError] = useState(null)

  function resetSearch() {
    setMember(null)
    setError(null)
  }

  async function searchRegistry(matricula) {
    setError(null)

    if (!matricula) {
      setMember(null)

      return
    }

    try {
      const data = await getMemberByDocument(matricula)

      setMember(data)
    } catch (err) {
      setMember(null)
      setError(err.message)
    }
  }

  async function createRegistry(formData) {
    const payload =  crateMemberPayload(formData)

    try {
      const newMember = await createMember(payload)
      setMember(newMember)
      setError(null)

      sessionStorage.setItem('member', JSON.stringify(newMember))

      return newMember
    } catch (err) {
      setError(err.response.data.message)
    }
  }

  async function updateRegistry(formData) {
    const member_id = formData.member_id
    const payload =  updateMemberPayload(formData)

    try {
      const updatedMember = await updateMember(member_id, payload)
      setMember(updatedMember)
      setError(null)

      sessionStorage.setItem('member', JSON.stringify(updatedMember))

      return updatedMember
    } catch (err) {
      setError(err.message)
    }
  }

  return { member, error, resetSearch, searchRegistry, createRegistry, updateRegistry }
}