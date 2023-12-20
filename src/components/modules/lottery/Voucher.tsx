import JPButton from '@/components/JPButton'
import React, { useEffect, useState } from 'react'
import LotteryVoucherTable from './LotteryVoucherTable'
import { getLotteryVoucherData } from '@/services/lottery'
import { Modal } from '@/components/Modal'
import CreateVoucher from '../voucher/CreateVoucher'

type Props = {}

const Voucher = (props: Props) => {
    const [voucherData,setVoucherData] = useState<any>([])
    const [isCreateVoucherOpen, setIsCreateVoucherOpen] = useState(false);
    const handleCreateVoucher = () => setIsCreateVoucherOpen(!isCreateVoucherOpen);
    useEffect(()=>{
      const fetch = async () => {
          const data = await getLotteryVoucherData()
          setVoucherData(data)
      }
      fetch()
    },[])
  return (
    <div>
          <div className='flex justify-end'>
            <JPButton onClick={handleCreateVoucher}>Generate Voucher</JPButton>
        </div>
        <LotteryVoucherTable data={voucherData} />
        
        {
          isCreateVoucherOpen && (

            <Modal onClose={handleCreateVoucher} isOpen={isCreateVoucherOpen}>
          <CreateVoucher />
        </Modal>
          )
        }
    </div>
  )
}

export default Voucher