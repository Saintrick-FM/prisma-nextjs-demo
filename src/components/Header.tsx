
import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next';

const Header = async() => {
const client = createClient();
 const settings= await client.getSingle("settings")

return (


    <div className="w-[1440px] h-[88px] px-[41px] flex-col justify-start items-center gap-2.5 inline-flex">
  <div className="w-[1152px] py-7 justify-between items-center inline-flex">
  <svg width={142} height={32} viewBox="0 0 142 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M99.1534 26.1293C98.5706 26.1293 98.2792 25.8379 98.2792 25.2551V12.9882C98.2792 12.3867 98.5706 12.0859 99.1534 12.0859C99.6986 12.0859 99.9712 12.3867 99.9712 12.9882V14.7648C100.385 13.8812 100.996 13.2044 101.804 12.7345C102.631 12.2645 103.581 12.0201 104.652 12.0013C104.878 11.9825 105.066 12.0295 105.216 12.1423C105.367 12.2551 105.442 12.4337 105.442 12.6781C105.461 13.2044 105.188 13.4958 104.624 13.5522L104.229 13.5804C102.895 13.6932 101.861 14.135 101.127 14.9058C100.394 15.6578 100.028 16.673 100.028 17.9514V25.2551C100.028 25.8379 99.7362 26.1293 99.1534 26.1293Z" fill="#059669" />
      <path d="M108.792 8.7583C107.965 8.7583 107.551 8.3635 107.551 7.57391C107.551 6.80312 107.965 6.41772 108.792 6.41772C109.619 6.41772 110.033 6.80312 110.033 7.57391C110.033 8.3635 109.619 8.7583 108.792 8.7583ZM108.792 26.0729C108.209 26.0729 107.918 25.7627 107.918 25.1423V13.0728C107.918 12.4713 108.209 12.1705 108.792 12.1705C109.356 12.1705 109.638 12.4713 109.638 13.0728V25.1423C109.638 25.7627 109.356 26.0729 108.792 26.0729Z" fill="#059669" />
      <path d="M118.625 26.1857C117.779 26.1857 116.933 26.0729 116.087 25.8473C115.259 25.6217 114.47 25.2363 113.718 24.6911C113.473 24.5407 113.361 24.3339 113.379 24.0707C113.398 23.7887 113.502 23.5725 113.69 23.4221C113.896 23.2717 114.15 23.2905 114.451 23.4785C115.184 23.9673 115.899 24.3057 116.594 24.4937C117.29 24.6817 117.985 24.7757 118.681 24.7757C119.847 24.7757 120.721 24.5689 121.304 24.1553C121.905 23.7229 122.206 23.1307 122.206 22.3787C122.206 21.7959 122.009 21.3353 121.614 20.997C121.219 20.6586 120.599 20.386 119.753 20.1792L117.299 19.6152C114.987 19.0888 113.831 17.895 113.831 16.0338C113.831 14.8306 114.301 13.8624 115.241 13.1292C116.181 12.3961 117.421 12.0295 118.963 12.0295C119.771 12.0295 120.552 12.1517 121.304 12.3961C122.074 12.6405 122.742 13.0164 123.306 13.524C123.55 13.712 123.654 13.9376 123.616 14.2008C123.578 14.464 123.447 14.6614 123.221 14.793C123.014 14.9246 122.77 14.887 122.488 14.6802C121.943 14.2666 121.369 13.9658 120.768 13.7778C120.166 13.571 119.555 13.4676 118.935 13.4676C117.844 13.4676 116.998 13.6932 116.397 14.1444C115.814 14.5956 115.523 15.2066 115.523 15.9774C115.523 16.5602 115.701 17.0302 116.058 17.3874C116.416 17.7446 116.998 18.0172 117.807 18.2052L120.26 18.7692C121.482 19.0512 122.394 19.4742 122.996 20.0382C123.597 20.5834 123.898 21.3259 123.898 22.2659C123.898 23.4879 123.419 24.4467 122.46 25.1423C121.501 25.8379 120.223 26.1857 118.625 26.1857Z" fill="#059669" />
      <path d="M133.586 26.1857C131.48 26.1857 129.816 25.5653 128.594 24.3245C127.391 23.0649 126.789 21.3447 126.789 19.164C126.789 17.754 127.062 16.5132 127.607 15.4416C128.152 14.37 128.904 13.5334 129.863 12.9318C130.841 12.3303 131.959 12.0295 133.219 12.0295C135.043 12.0295 136.462 12.6217 137.477 13.806C138.492 14.9904 139 16.6166 139 18.6846C139 19.211 138.737 19.4742 138.21 19.4742H128.481C128.538 21.1662 128.998 22.4727 129.863 23.3939C130.747 24.2963 131.969 24.7475 133.529 24.7475C134.225 24.7475 134.892 24.6629 135.531 24.4937C136.189 24.3057 136.829 23.9767 137.449 23.5067C137.787 23.2811 138.079 23.2341 138.323 23.3657C138.568 23.4785 138.699 23.6759 138.718 23.9579C138.756 24.2211 138.615 24.4655 138.295 24.6911C137.693 25.1799 136.96 25.5559 136.095 25.8191C135.249 26.0635 134.413 26.1857 133.586 26.1857ZM133.247 13.4112C131.818 13.4112 130.7 13.8624 129.891 14.7648C129.102 15.6484 128.641 16.7952 128.51 18.2052H137.449C137.411 16.7012 137.035 15.5262 136.321 14.6802C135.607 13.8342 134.582 13.4112 133.247 13.4112Z" fill="#059669" />
      <path d="M41.3951 26.1857C40.2107 26.1857 39.6185 25.5841 39.6185 24.3809V14.8212H38.3214C37.3814 14.8212 36.9114 14.3794 36.9114 13.4958C36.9114 12.6122 37.3814 12.1704 38.3214 12.1704H39.6185V12.1422C39.6185 10.2059 40.1073 8.75828 41.0849 7.79949C42.0625 6.8219 43.4725 6.24851 45.3149 6.07931L46.2737 5.99471C46.7625 5.95711 47.1197 6.06051 47.3453 6.30491C47.5709 6.54931 47.6837 6.8501 47.6837 7.2073C47.7024 7.5457 47.6179 7.85589 47.4299 8.13789C47.2419 8.40108 46.9693 8.55148 46.6121 8.58908L46.2173 8.61728C45.1457 8.69248 44.3655 8.96508 43.8767 9.43507C43.3879 9.90507 43.1435 10.6195 43.1435 11.5782V12.1704H45.5405C46.4805 12.1704 46.9505 12.6122 46.9505 13.4958C46.9505 14.3794 46.4805 14.8212 45.5405 14.8212H43.1435V24.3809C43.1435 25.5841 42.5607 26.1857 41.3951 26.1857ZM53.662 26.2421C50.5224 26.2421 48.9526 24.4843 48.9526 20.9687V7.63029C48.9526 6.44591 49.5354 5.85371 50.701 5.85371C51.8854 5.85371 52.4776 6.44591 52.4776 7.63029V20.7995C52.4776 22.4915 53.1826 23.3375 54.5926 23.3375C54.743 23.3375 54.884 23.3375 55.0156 23.3375C55.1472 23.3187 55.2788 23.2999 55.4104 23.2811C55.6736 23.2435 55.8522 23.3187 55.9462 23.5067C56.0402 23.6759 56.0872 24.0331 56.0872 24.5783C56.0872 25.0483 55.9932 25.4149 55.8052 25.6781C55.6172 25.9413 55.307 26.1011 54.8746 26.1575C54.4798 26.2139 54.0756 26.2421 53.662 26.2421Z" fill="#0891B2" />
      <path d="M64.0884 26.2421C62.6596 26.2421 61.4188 25.9507 60.366 25.3679C59.3132 24.7851 58.4954 23.9579 57.9126 22.8863C57.3298 21.7959 57.0385 20.5175 57.0385 19.0512C57.0385 17.5848 57.3298 16.3158 57.9126 15.2442C58.4954 14.1726 59.3132 13.3454 60.366 12.7626C61.4188 12.1798 62.6596 11.8884 64.0884 11.8884C65.5171 11.8884 66.7579 12.1798 67.8107 12.7626C68.8635 13.3454 69.6813 14.1726 70.2641 15.2442C70.8469 16.3158 71.1383 17.5848 71.1383 19.0512C71.1383 20.5175 70.8469 21.7959 70.2641 22.8863C69.6813 23.9579 68.8635 24.7851 67.8107 25.3679C66.7579 25.9507 65.5171 26.2421 64.0884 26.2421ZM64.0884 23.5631C65.1412 23.5631 65.9871 23.1871 66.6263 22.4351C67.2655 21.6643 67.5851 20.5363 67.5851 19.0512C67.5851 17.5472 67.2655 16.4286 66.6263 15.6954C65.9871 14.9434 65.1412 14.5674 64.0884 14.5674C63.0356 14.5674 62.1896 14.9434 61.5504 15.6954C60.9112 16.4286 60.5916 17.5472 60.5916 19.0512C60.5916 20.5363 60.9112 21.6643 61.5504 22.4351C62.1896 23.1871 63.0356 23.5631 64.0884 23.5631Z" fill="#0891B2" />
      <path d="M79.102 26.1857C78.1245 26.1857 77.4477 25.6969 77.0717 24.7193L72.9827 14.2854C72.7383 13.6274 72.7477 13.0728 73.0109 12.6216C73.2929 12.1704 73.7817 11.9448 74.4773 11.9448C74.8909 11.9448 75.2293 12.0482 75.4925 12.255C75.7557 12.443 75.9813 12.8096 76.1693 13.3548L79.2712 21.8429L82.4578 13.1292C82.7586 12.3396 83.2944 11.9448 84.0652 11.9448C84.8548 11.9448 85.3906 12.3396 85.6726 13.1292L88.8591 21.9275L91.9893 13.2702C92.1773 12.7626 92.4123 12.4148 92.6943 12.2268C92.9951 12.0388 93.3241 11.9448 93.6813 11.9448C94.3581 11.9448 94.7999 12.1892 95.0067 12.678C95.2135 13.148 95.1947 13.6838 94.9503 14.2854L90.8895 24.7193C90.4947 25.6969 89.8179 26.1857 88.8591 26.1857C87.8627 26.1857 87.186 25.6969 86.8288 24.7193L83.9524 17.0772L81.1324 24.6911C80.7752 25.6875 80.0984 26.1857 79.102 26.1857Z" fill="#0891B2" />
      <path d="M20.4988 21.4987C24.5996 20.7392 27.7052 17.1439 27.7052 12.8232C27.7052 7.9503 23.7549 4 18.882 4C14.5613 4 10.966 7.10564 10.2065 11.2064C10.7307 11.1093 11.2711 11.0586 11.8234 11.0586C16.6963 11.0586 20.6466 15.0089 20.6466 19.8818C20.6466 20.4341 20.5959 20.9745 20.4988 21.4987Z" fill="#6EE7B7" />
      <path d="M20.4987 21.4987C19.9745 21.5958 19.4341 21.6465 18.8818 21.6465C14.0089 21.6465 10.0586 17.6962 10.0586 12.8232C10.0586 12.271 10.1093 11.7306 10.2064 11.2064C6.10564 11.9658 3 15.5612 3 19.8818C3 24.7548 6.9503 28.7051 11.8232 28.7051C16.1439 28.7051 19.7392 25.5995 20.4987 21.4987Z" fill="#06B6D4" />
      <path d="M10.2064 11.2064C10.7306 11.1093 11.271 11.0586 11.8232 11.0586C16.6962 11.0586 20.6465 15.0089 20.6465 19.8818C20.6465 20.4341 20.5958 20.9745 20.4987 21.4987C19.9745 21.5958 19.4341 21.6465 18.8818 21.6465C14.0089 21.6465 10.0586 17.6962 10.0586 12.8232C10.0586 12.271 10.1093 11.7306 10.2064 11.2064Z" fill="#2DD4BF" />
    </svg>

    <nav className="justify-start items-center gap-[30px] flex">
      {settings.data.navigation.map(({label,link},index)=>(
      <div className="text-slate-700 text-base font-normal font-body" key={index}>
        <PrismicNextLink field={link}>{label}</PrismicNextLink>
      </div>

      ))}
    </nav>
  </div>
</div>

)
};

export default Header;