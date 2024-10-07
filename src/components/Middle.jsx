import React from "react"

const Middle = () => {
  return (
    <div className="m-0 p-0">
    <div className="   relative">
      <img
        className="c absolute inset-0 object-cover h-full  w-full
        "
        src="https://images.unsplash.com/photo-1636955816868-fcb881e57954?auto=format&fit=crop&w=1920"
        alt=""
      />

      <div
        className="grid 
        grid-cols-[30%_10%_10%_5%_10%_5%_32%] 
        grid-rows-[minmax(160px,auto),minmax(44px,auto),minmax(14px,auto),minmax(65px,auto),minmax(16px,auto),minmax(61px,auto),1fr] 
        gap-4 
        p-8 rounded-lg relative "
      >
        
        {/* Verified Message */}
        <div className="col-start-2 col-end-7 row-start-2 row-end-3 flex flex-col items-center">
          <h3 className="text-gray-800 text-[23px] leading-[1.3] font-bold">
            Your Document is Verified!
          </h3>
        </div>

        {/* Image Section */}
        <div className="col-start-4 col-end-5 row-start-4 row-end-5 flex items-center justify-center">
          <div className="flex items-center justify-center w-16 h-16">
            <img
              src="https://assets.zyrosite.com/Aq20eV79zLfpXV6b/source-dJoG1g8L9nhpnwB4.gif"
              alt=""
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Verify Button */}
        <div className="col-start-3 col-end-6 row-start-6 row-end-7 flex items-center justify-center">
          <a
            href="/Verification"
            rel="nofollow"
            className="bg-green-600 text-white font-bold py-3 px-5 rounded-lg hover:bg-green-500 text-[19px] mobile:text-[14px]"
          >
            CLICK HERE TO VERIFY
          </a>
        </div>
      </div>
        
    </div>
    <footer className="bg-gray-100 text-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Useful Links */}
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
            <a href="/privacy-policy" className="text-blue-500 hover:underline mb-2">Privacy Policy</a>
            {/* Add more links as needed */}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="mb-2">
              <a href="mailto:contact@codsoft.in" className="text-blue-500 hover:underline">contact@codsoft.in</a>
            </p>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/codsoft_official/" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" fill="currentColor">
                  <path d="M12 5.848c-3.405 0-5.848 3.747-5.848 6.152 0 2.405 3.443 6.151 5.848 6.151 3.405 0 5.848-3.747 5.848-6.151 0-2.405-3.443-6.152-5.848-6.152zm0 10.152c-2.2 0-4-1.794-4-4 0-2.207 1.794-4 4-4s4 1.793 4 4c0 2.206-1.8 4-4 4zM19.841 5.596c0 .798-.643 1.434-1.435 1.434-.798 0-1.434-.643-1.434-1.434 0-.798.643-1.434 1.434-1.434.792 0 1.435.643 1.435 1.434zm3.074 1.456c-.354-1.892-1.174-3.593-2.782-4.207C18.613.178 16.193 0 12.002 0 7.805 0 5.055.036 3.15.145c-1.902.112-3.383 1.117-4.578 2.585C-1.11 4.175-1.163 6.41-.052 9.116c.225 1.192.687 2.153 1.337 2.713C.1 12.412.045 14.696.135 16.639.204 18.24.514 20.053 2.022 21.974c1.066 1.058 2.763 1.517 4.414 1.613 1.5.093 4.529.16 5.333.16 2.036 0 4.141-.036 5.342-.176 1.046-.1 2.082-.443 2.905-1.076 1.224-.92 1.69-2.494 1.892-4.095.09-.626.085-1.237.05-1.837.18-1.392.182-3.06-.062-4.272zm-5.39 3.77c-.51.194-.92.542-1.176.975l-2.247 3.278c-.21.312-.516.678-.74.895-.55.55-1.53.548-2.092 0-.563-.563-.563-1.5 0-2.063.559-.563 1.52-.563 2.07 0 .28.28.509.619.688.97l2.241-3.194c.103-.146.263-.294.353-.373.553-.548 1.51-.548 2.068 0 .557.553.557 1.5-.006 2.055-.99.99-2.067 1.682-3.27 2.261z"></path>
                </svg>
              </a>
              <a href="mailto:contact@codsoft.in" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
                  <path d="M21.75 3H2.25C1.00734 3 0 4.00734 0 5.25V18.75C0 19.9927 1.00734 21 2.25 21H21.75C22.9927 21 24 19.9927 24 18.75V5.25C24 4.00734 22.9927 3 21.75 3zM21.75 5.25V7.16273C20.699 8.01862 19.0234 9.3495 15.4412 12.1545C14.6518 12.7754 13.0881 14.2672 12 14.2498C10.9121 14.2674 9.34786 12.7752 8.55877 12.1545C4.97719 9.34992 3.30117 8.01877 2.25 7.16273V5.25H21.75zM2.25 18.75V10.0499C3.32409 10.9054 4.8473 12.1059 7.16897 13.9239C8.19352 14.7304 9.98775 16.5108 12 16.5C14.0024 16.5108 15.7739 14.7563 16.8306 13.9243C19.1522 12.1064 20.6759 10.9055 21.75 10.05V18.75H2.25z"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/codsoft/" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" fill="currentColor">
                  <path d="M5.37214 23.9997H0.396429V7.97649H5.37214V23.9997ZM2.88161 5.79078C1.29054 5.79078 0 4.47292 0 2.88185C1.13882e-08 2.1176 0.303597 1.38465 0.844003 0.844247C1.38441 0.303841 2.11736 0.000244141 2.88161 0.000244141C3.64586 0.000244141 4.3788 0.303841 4.91921 0.844247C5.45962 1.38465 5.76321 2.1176 5.76321 2.88185C5.76321 4.47292 4.47214 5.79078 2.88161 5.79078ZM23.9946 23.9997H19.0296V16.1997C19.0296 14.3408 18.9921 11.9569 16.4427 11.9569C13.8557 11.9569 13.4593 13.9765 13.4593 16.0658V23.9997H8.48893V7.97649H13.2611V10.1622H13.3307C13.995 8.90328 15.6177 7.57471 18.0386 7.57471C23.0743 7.57471 24 10.8908 24 15.1979V23.9997H23.9946Z"></path>
                </svg>
              </a>
              <a href="https://t.me/codsoftt" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.091 9.367l-1.907 9.348c-.06.29-.224.546-.464.686-.239.14-.528.142-.774.009l-1.894-1.167-3.186 1.348c-.318.131-.667.05-.926-.155-.258-.205-.394-.546-.354-.887l1.194-8.152c.06-.39.368-.703.759-.783.418-.088.817.11 1.046.427l1.858 2.58 5.036-2.463c.426-.207.794-.635.853-1.11.058-.474-.191-.948-.598-1.148l-6.373-3.44c-.28-.146-.601-.146-.882 0l-6.023 3.39c-.443.257-.722.693-.722 1.17v6.454c0 .317.156.629.411.804l5.147 3.23 5.528-2.342-1.11-5.305 4.098-2.2c.228-.119.384-.364.42-.623.036-.259-.07-.512-.264-.694-.187-.176-.45-.256-.703-.223-.25.035-.487.167-.688.328l-3.968 2.302-.137-.657 5.394-3.203c.166-.099.395-.078.533.049.137.126.188.316.152.489-.037.172-.137.322-.293.396l-5.156 2.843 1.587 7.632 1.823-8.683c.075-.356.315-.641.673-.763.363-.122.738-.066 1.036.159.292.221.463.55.504.921.042.372-.09.747-.314 1.022l-5.522 4.735c-.104.086-.231.141-.366.161l-3.79 1.289 3.236 2.031 2.765-1.111-1.755-8.371 6.091-2.955z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Codsoft. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Middle;
