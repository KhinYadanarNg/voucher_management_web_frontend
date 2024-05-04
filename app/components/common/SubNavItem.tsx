import React from 'react'

interface SubNavItemProps {
    selected?: boolean;
    label : string;
}

const SubNavItem: React.FC<SubNavItemProps> = ({
    selected, label,
}) => {
  return (
    <div className={`flex items-center justify-center text-center gap-1
                    p-2 border-b-2 mb-1 hover:text-slate-800 transition
                    cursor-pointer ${selected? 'border-b-white text-slate-700' :
                    'border-transparent text-white'}`}>
      <div className='font-medium text-sm text-center break-normal'>{label}</div>
    </div>
  )
}

export default SubNavItem;
