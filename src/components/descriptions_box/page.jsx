import styles from '../../styles/page'

const DescriptionBox = () => {
  return (
    <div className={`${styles.paddingX} mt-10`}>
      <div className='flex'>
        <div className='flex justify-center items-center border w-[170px] h-[70px] border-[#d0d0d0]'>Descriptions</div>
        <div className='flex justify-center items-center border w-[170px] h-[70px] border-[#d0d0d0] bg-[#FBFBFB] text-[#555]'>Reviews(122)</div>
      </div>
      <div className='flex flex-col border border-[#d0d0d0] p-5'>
        <p>
          Promises give us a way to make sense out of asynchronous behavior.
          When making an asynchronous request, one of two things can happen:
          everything goes as we hope or there’s an error. There may be several
          different types of successful or unsuccessful requests. For example,
          we could try several ways to obtain the data to reach success. We
          could also receive multiple types of errors. Promises give us a way to
          simplify back to a simple pass or fail
        </p>
        <br/>
        <p>
          Promises give us a way to make sense out of asynchronous behavior.
          When making an asynchronous request, one of two things can happen:
          everything goes as we hope or there’s an error.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
