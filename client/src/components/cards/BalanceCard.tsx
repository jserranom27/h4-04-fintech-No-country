import React from 'react'
import Button from '../ui/Button'
import { FlagCircle } from '@mui/icons-material'

interface BalanceCardProps {
	amount: number
}

export default function BalanceCard({ amount }: BalanceCardProps) {
	return (
		<div className='p-4 bg-white50 text-white900 rounded-2xl'>
			<div className='flex flex-col'>
				<div className='flex flex-row items-center justify-between'>
					<div>
						<p className='text-p3-regular'>Balance disponible</p>
						<h6 className='text-h6-bold'>$ {amount}</h6>
					</div>
					<Button size='small' variant='solid' className='rounded-3xl'>Agregar Fondos</Button>
				</div>
			</div>
			{amount === 0
				? <div className='flex items-center justify-start space-x-2 w-full py-1 px-2 bg-primary100 text-white900 rounded-md'>
						<span className='text-accent50'><FlagCircle /></span>
						<p className='text-p3-regular'>Agrega tus primeros fondos para conseguir tus metas.</p>
					</div>
				: ' '}
		</div>
	)
}

