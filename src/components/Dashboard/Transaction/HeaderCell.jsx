const HeaderCell = ({ index, children }) => {
  const isTransactionFee = index === 3;

  return (
    <div className={`flex flex-col justify-center ${isTransactionFee ? 'items-end' : 'items-start'} gap-[-1px] flex-[1_0_0]`}>
      <div className={`flex items-center gap-[4px]`}>
        {children}
      </div>
    </div>
  )
}

export default HeaderCell;