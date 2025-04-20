import { useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { ReactNode } from 'react'

type OptionType = {
  value: string
  label: string
  component: ReactNode
}

type TabsGroupProps = {
  options: OptionType[]
}

export function TabsGroup({ options }: TabsGroupProps) {
  const [selectedTab, setSelectedTab] = useState(options[0])

  return (
    <Tab.Group
      defaultIndex={0}
      onChange={(index) => setSelectedTab(options[index])}
      className="w-full"
    >
      <Tab.List className="mb-4 flex rounded-md bg-gray-100 p-1">
        {options.map((option) => (
          <Tab
            key={option.value}
            className={({ selected }) =>
              clsx(
                'w-full cursor-pointer rounded-lg py-2 text-sm leading-5 font-medium',
                selected
                  ? 'bg-white font-bold text-black shadow'
                  : 'text-gray-500 hover:bg-white/70'
              )
            }
          >
            {selectedTab.label}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {options.map((option) => (
          <Tab.Panel key={option.value}>{option.component}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}
