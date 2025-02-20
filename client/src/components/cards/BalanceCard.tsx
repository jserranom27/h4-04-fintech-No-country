import React  from 'react'
import Button from '../ui/Button'
import Link from 'next/link'
import CurrencySwitchBtn from '../ui/CurrencySwitchBtn'

interface BalanceCardProps {
	title: string
	amount: number
	earning: number
}

export default function BalanceCard({ title, amount, earning }: BalanceCardProps) {


	return (
		<div className='p-4 bg-white50 text-white900 shadow-lg rounded-2xl lg:w-[90%] lg:mx-auto'>
			<div className='flex flex-col space-y-6'>
				{/* Header */}
				<div className='flex justify-between items-center '>
					<p className='text-p1-bold'>{title}</p>
					<CurrencySwitchBtn />
				</div>
				{/* Content */}
				<div className='space-y-3'>
					<h3 className='text-h3-bold'>$ {amount.toLocaleString()} </h3>
					<p className='text-p1-regular text-white600'>
						<span className='text-success700'> + $ {earning.toLocaleString()}</span> en 12 meses
					</p>
				</div>
				{/* Footer */}
				<div className='flex justify-center space-x-2 w-full'>
					<Link href={'/app/home/investment'} className='w-1/2' >
						<Button size='medium' variant='solid' className='rounded-3xl w-full'>Ingresar</Button>
					</Link>
					<Link href={'/app/home/investment'} className='w-1/2' >
						<Button size='medium' variant='outline' className='rounded-3xl w-full bg-white100 border-none text-white900'>Retirar</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}

