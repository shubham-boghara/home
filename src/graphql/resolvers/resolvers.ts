import { ObjectId } from 'mongoose';
import { ICD, ICM } from 'types/resolversTypes';
import { IModels } from '../../types/mongooseTypes';

const month = new Date().getMonth();
export default {
        Query: {
            getMember:
             async(_:any,
                _arg:any,
                {models}:{models:IModels}) => {
                   const getMember = await models.Member.find({})

                   return getMember
                 },

            getMemberData:
           async (_:any,
                {at}:{at:string},
                {models}:{models:IModels}) => {
                    const Id = at
                  const getMemberData = await models.Member.findById({_id:Id})

                  return getMemberData
                },

            getAllData:
             async(_:any,
                _arg:any,
                {models}:{models:IModels}) => {
                   const Data = await models.Data.find({}).populate('memberId')

                   return Data
                 },

            getData:
            async(_:any,
                {at}:{at:string},
                {models}:{models:IModels}) => {
                const DataId = at
                const getData = await models.Data.findById({_id:DataId}).populate('memberId')

                return getData

                },

            getListedData: async(
                _:any,
                {m_Id}:{m_Id:ObjectId},
                {models}:{models:IModels}) => {
                    const Id = m_Id
                   const getListedData = await models.Data.find({memberId:Id}).populate('memberId')

                   return getListedData
                }
        },

        Mutation: {
             createMember: async(
                 _:any,
                 {input}:{input:ICM},
                 {models}:{models:IModels}
                 ) => {

                    const {username,address,phonNumber} = input
                    const memberCreate =  new models.Member({
                        username,
                        address,
                        phonNumber,
                        month
                    })
                    await  memberCreate.save()

                   return memberCreate

                 },
                 createDataField: async(
                    _:any,
                    {input}:{input:ICD},
                    {models}:{models:IModels}
                    ) => {
                       const {memberId,total_p,design,return_p,price,color} = input

                       const dateCreate = new models.Data({
                           memberId,
                           total_p,
                           design,
                           return_p,
                           price,
                           color,
                           month
                       })

                       await dateCreate.save()

                       return dateCreate

                    },
        }

}