import Image from "next/image";

export default function Pagination({total, pagination, setPagination}: {total: number, pagination: number, setPagination: (page: number) => void}) {
  return (
    <>
    <button onClick={() => setPagination(pagination - 1)} className={`pagination-arrow ${pagination == 1 ? 'disabled' : ''}`}><Image alt="arrow" width={9} height={21} className="rotate-180" src="/icons/arr.svg" /></button>
    <button onClick={() => setPagination(1)} className={`page-item ${1 == pagination ? 'active' : ''}`}>1</button>
    {
      pagination - 1 >= 3 && <span className={`page-item`}>...</span>
    }
    {
      pagination > 2 && <button onClick={() => setPagination(pagination - 1)} className={`page-item`}>{pagination - 1}</button>
    }
    {
      pagination != total && pagination != 1 && <button className={`page-item active`}>{pagination}</button>
    }
    {
      pagination < total - 1 && <button onClick={() => setPagination(pagination + 1)} className={`page-item`}>{pagination + 1}</button>
    }
    {
      total - pagination >= 3 && <span className={`page-item`}>...</span>
    }
    <button onClick={() => setPagination(total)} className={`page-item ${total == pagination ? 'active' : ''}`}>{total}</button>
    <button onClick={() => setPagination(pagination + 1)} className="pagination-arrow"><Image alt="arrow" width={9} height={21} src="/icons/arr.svg" /></button>
    </>
  );
}
