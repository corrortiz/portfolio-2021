import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import { MyContext } from '../types'
import { Patient, PatientSex } from '../entities/Patient'

@Resolver(Patient)
export class PatientResolver {
  @Query(() => [Patient])
  patients (@Ctx() { em }: MyContext): Promise<Patient[]> {
    return em.find(Patient, {})
  }

  @Query(() => Patient, { nullable: true })
  patient (
    @Arg('id') id: number,
    @Ctx() { em }: MyContext
  ): Promise<Patient | null> {
    return em.findOne(Patient, { id })
  }

  @Mutation(() => Patient)
  async createPatient (
    @Arg('user') user: string,
    @Arg('name') name: string,
    @Arg('lastName') lastName: string,
    @Arg('sex') sex: PatientSex,
    @Arg('birthDay') birthDay: string,
    @Arg('age') age: number,
    @Arg('phone') phone: string,
    @Arg('email') email: string,
    @Ctx() { em }: MyContext
  ): Promise<Patient> {
    const newPatient = em.create(Patient, {
      user,
      name,
      lastName,
      sex,
      birthDay,
      age,
      phone,
      email
    })
    await em.persistAndFlush(newPatient)
    return newPatient
  }

  @Mutation(() => Patient, { nullable: true })
  async updatePatient (
    @Arg('id') id: number,
    @Arg('user') user: string,
    @Arg('name') name: string,
    @Arg('lastName') lastName: string,
    @Arg('sex') sex: PatientSex,
    @Arg('birthDay') birthDay: string,
    @Arg('age') age: number,
    @Arg('phone') phone: string,
    @Arg('email') email: string,
    @Ctx() { em }: MyContext
  ): Promise<Patient | null> {
    let patientToUpdate = await em.findOne(Patient, { id })
    if (!patientToUpdate) {
      return null
    }
    patientToUpdate = {
      ...patientToUpdate,
      user,
      name,
      lastName,
      sex,
      age,
      phone,
      email,
      birthDay: new Date(birthDay)
    }
    await em.persistAndFlush(patientToUpdate)
    return patientToUpdate
  }
}
