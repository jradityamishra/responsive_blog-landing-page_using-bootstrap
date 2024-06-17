import React from 'react'

const Blog = () => {
    return (
        <>
            {/* article */}
            <div className='m-2 border p-2'>
                <div className='d-flex justify-content-center align-items-center h-100 w-100' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <img
                        src="https://s3-alpha-sig.figma.com/img/8f0b/5f52/59515bfc8d2d4ff8928be097376153e9?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EwvQaxFwWfv97F7HxzZF9vzhzkVgKy9jGZ7dBFCafzvlIoC5BK9hTZFUx3tL4RaDLK-ueT1qnvvqbvjWN~wmwRbuadsFXdKPtG40ng4ReInbBbaeM2LUsjdH7zzvTb2MeROtRhMouozsnsbIYBCURHT2hg8pOgdho9A1lAvDDe0lm7KXSI55Yomu4-5H8q-Skscfb3Mx1QGsXpLp8V6x3~N7Cxkeo9A7isvIqnpfWqFIoK1xfysZWC9TgkGCwf6QKy5JEj1k6HsVdimqAC~rkr77Ps9YFHl2pMsrVkCg2S6CMmvrzlXenTqP4hjGhsWZBS1J7eRzuUzjmDOhxcSh9g__"
                        alt=""
                        style={{ width: '100vw', height: '20vh', objectFit: 'cover' }}
                    />
                </div>
                <div className='p-2 d-flex'>
                    <p>✍️ Article</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <h3 style={{ fontSize: '22px', lineHeight: '29.52px' }}>What if famous brands had regular fonts? Meet RegulaBrands!</h3>
                    <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6667 2.99996C14.6667 4.28329 15.7167 5.33329 17 5.33329C18.2834 5.33329 19.3334 4.28329 19.3334 2.99996C19.3334 1.71663 18.2834 0.666626 17 0.666626C15.7167 0.666626 14.6667 1.71663 14.6667 2.99996ZM12.3334 2.99996C12.3334 1.71663 11.2834 0.666626 10 0.666626C8.71671 0.666626 7.66671 1.71662 7.66671 2.99996C7.66671 4.28329 8.71671 5.33329 10 5.33329C11.2834 5.33329 12.3334 4.28329 12.3334 2.99996ZM5.33337 2.99996C5.33337 1.71662 4.28337 0.666625 3.00004 0.666625C1.71671 0.666625 0.666708 1.71662 0.666708 2.99996C0.666708 4.28329 1.71671 5.33329 3.00004 5.33329C4.28337 5.33329 5.33337 4.28329 5.33337 2.99996Z" fill="black" />
                    </svg>

                </div>
                <p className='pt-2 pb-3' style={{ color: '#5C5C5C' }}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                {/* lower line */}
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img className="rounded-circle" style={{ width: "3vw", height: "5vh" }} src="https://s3-alpha-sig.figma.com/img/c20f/9a59/15d7211204149d93adda6dfafb5d81f2?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IVoO4d30R~TBKXmV34-sy8cex-z4PfIGbULRMukph6pgaR1P~1~zt7bjWMADAC4S60LvHJ-SoD3P0whyHESvwmPbBjS14X~-sDqSmaLHFoI8j7vRlgxRM3ZiCbNOYHYxzlPhvDu1jr4AMR9YlylviUNhzYaw5CfFZxiZ1XOGBVyd-NeIFggbDcMzPE8sVPW5m11T8R6~OzXCF~rHdjLOQ0u5uZ8lvFqunsPS7ma1lvxanOzkmrpUbwd8bWgdvVD5~XuWBcydnGY28PzEmrJjU0t30aHWoaJ9vBmV2vcKAGjZP2HgOzjcAqoBUB2jS7Cu-CjwuCwlJXXr01mqMAaBag__" alt="" />
                        <h1 className='font-wight-bold h4 p-3'>Sarah West</h1>
                    </div>
                    <div className='d-flex' >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="icon/action/visibility_24px">
                                <path id="icon/action/visibility_24px_2" fill-rule="evenodd" clip-rule="evenodd" d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z" fill="#525252" />
                            </g>
                        </svg>
                        <p style={{ color: '#525252' }}>1.4k views</p>
                        <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="42" height="36" rx="2" fill="#EDEEF0" />
                            <g clip-path="url(#clip0_1_966)">
                                <path d="M25.5 21.06C24.93 21.06 24.42 21.285 24.03 21.6375L18.6825 18.525C18.72 18.3525 18.75 18.18 18.75 18C18.75 17.82 18.72 17.6475 18.6825 17.475L23.97 14.3925C24.375 14.7675 24.9075 15 25.5 15C26.745 15 27.75 13.995 27.75 12.75C27.75 11.505 26.745 10.5 25.5 10.5C24.255 10.5 23.25 11.505 23.25 12.75C23.25 12.93 23.28 13.1025 23.3175 13.275L18.03 16.3575C17.625 15.9825 17.0925 15.75 16.5 15.75C15.255 15.75 14.25 16.755 14.25 18C14.25 19.245 15.255 20.25 16.5 20.25C17.0925 20.25 17.625 20.0175 18.03 19.6425L23.37 22.7625C23.3325 22.92 23.31 23.085 23.31 23.25C23.31 24.4575 24.2925 25.44 25.5 25.44C26.7075 25.44 27.69 24.4575 27.69 23.25C27.69 22.0425 26.7075 21.06 25.5 21.06Z" fill="#2D2D2D" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_966">
                                    <rect width="18" height="18" fill="white" transform="translate(12 9)" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                </div>

            </div>

            {/* education */}
            <div className='m-2 border p-2'>
                <div className='d-flex justify-content-center align-items-center h-100 w-100' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <img
                        src="https://s3-alpha-sig.figma.com/img/250a/24fe/c8e32137d06a7bb3fd57b6dfb4e07bfe?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p7vv9aIW17QC8-v1o8V8TskKwHFL0BVsrpD74ChGjfr8dcMnyuH-Zp-VMor5jpGs3tQUXpstodF~hJNaoS1TepnOng7lFJsnfv076q0jvzTKVY538X-kPjfdyQ7iGhKCKqUzMC-eSPwfO2kPEy-Wz9K7pwB2VUpWZ4FhxTy4oIvjp9LDyOTdcnChd8gPBWXY4UHliH-bmUroJbK88sgsZ1jjaDOPpyCkMiqbmwhW2EBsgKzt7Ln4qvEK022Okln~Gt55mVk53OGNDLMTEMi71nNx6fAN3c-xhFZx4dLzNMfY8OOEMm7zTAIsEYq0cqOeZ1evtcHRAzC0wcsCgV17cA__"
                        alt=""
                        style={{ width: '100vw', height: '20vh', objectFit: 'cover' }}
                    />
                </div>
                <div className='p-2 d-flex'>
                    <p>🔬️ Education</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <h3 style={{ fontSize: '22px', lineHeight: '29.52px' }}>Tax Benefits for Investment under National Pension Scheme launched by Government</h3>
                    <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6667 2.99996C14.6667 4.28329 15.7167 5.33329 17 5.33329C18.2834 5.33329 19.3334 4.28329 19.3334 2.99996C19.3334 1.71663 18.2834 0.666626 17 0.666626C15.7167 0.666626 14.6667 1.71663 14.6667 2.99996ZM12.3334 2.99996C12.3334 1.71663 11.2834 0.666626 10 0.666626C8.71671 0.666626 7.66671 1.71662 7.66671 2.99996C7.66671 4.28329 8.71671 5.33329 10 5.33329C11.2834 5.33329 12.3334 4.28329 12.3334 2.99996ZM5.33337 2.99996C5.33337 1.71662 4.28337 0.666625 3.00004 0.666625C1.71671 0.666625 0.666708 1.71662 0.666708 2.99996C0.666708 4.28329 1.71671 5.33329 3.00004 5.33329C4.28337 5.33329 5.33337 4.28329 5.33337 2.99996Z" fill="black" />
                    </svg>

                </div>
                <p className='pt-2 pb-3' style={{ color: '#5C5C5C' }}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                {/* lower line */}
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img className="rounded-circle" style={{ width: "3vw", height: "5vh" }} src="https://s3-alpha-sig.figma.com/img/c20f/9a59/15d7211204149d93adda6dfafb5d81f2?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IVoO4d30R~TBKXmV34-sy8cex-z4PfIGbULRMukph6pgaR1P~1~zt7bjWMADAC4S60LvHJ-SoD3P0whyHESvwmPbBjS14X~-sDqSmaLHFoI8j7vRlgxRM3ZiCbNOYHYxzlPhvDu1jr4AMR9YlylviUNhzYaw5CfFZxiZ1XOGBVyd-NeIFggbDcMzPE8sVPW5m11T8R6~OzXCF~rHdjLOQ0u5uZ8lvFqunsPS7ma1lvxanOzkmrpUbwd8bWgdvVD5~XuWBcydnGY28PzEmrJjU0t30aHWoaJ9vBmV2vcKAGjZP2HgOzjcAqoBUB2jS7Cu-CjwuCwlJXXr01mqMAaBag__" alt="" />
                        <h1 className='font-wight-bold h4 p-3'>Sarah West</h1>
                    </div>
                    <div className='d-flex' >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="icon/action/visibility_24px">
                                <path id="icon/action/visibility_24px_2" fill-rule="evenodd" clip-rule="evenodd" d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z" fill="#525252" />
                            </g>
                        </svg>
                        <p style={{ color: '#525252' }}>1.4k views</p>
                        <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="42" height="36" rx="2" fill="#EDEEF0" />
                            <g clip-path="url(#clip0_1_966)">
                                <path d="M25.5 21.06C24.93 21.06 24.42 21.285 24.03 21.6375L18.6825 18.525C18.72 18.3525 18.75 18.18 18.75 18C18.75 17.82 18.72 17.6475 18.6825 17.475L23.97 14.3925C24.375 14.7675 24.9075 15 25.5 15C26.745 15 27.75 13.995 27.75 12.75C27.75 11.505 26.745 10.5 25.5 10.5C24.255 10.5 23.25 11.505 23.25 12.75C23.25 12.93 23.28 13.1025 23.3175 13.275L18.03 16.3575C17.625 15.9825 17.0925 15.75 16.5 15.75C15.255 15.75 14.25 16.755 14.25 18C14.25 19.245 15.255 20.25 16.5 20.25C17.0925 20.25 17.625 20.0175 18.03 19.6425L23.37 22.7625C23.3325 22.92 23.31 23.085 23.31 23.25C23.31 24.4575 24.2925 25.44 25.5 25.44C26.7075 25.44 27.69 24.4575 27.69 23.25C27.69 22.0425 26.7075 21.06 25.5 21.06Z" fill="#2D2D2D" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_966">
                                    <rect width="18" height="18" fill="white" transform="translate(12 9)" />
                                </clipPath>
                            </defs>
                        </svg>


                    </div>
                </div>

            </div>

            {/* meetup */}

            <div className='m-2 border p-2'>
                <div className='d-flex justify-content-center align-items-center h-100 w-100' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <img
                        src="https://s3-alpha-sig.figma.com/img/bdc0/79a9/a2e530610a1b91c9682ba7889c87c1b2?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ll5sqn9YuE-evKrJAgN86lIVC-EGZf8wiAw1nq7yAryNBOkq7Sg8hKImeS7LeiCBxcRUy0JhqQVzNiHagbk~JVvkW8BSoPvEKIaXZD0RCE7cbbNavBBaU~zfmUvq9agcyHvtxph9jVXyYGeWEfxfe-pVLgnhNz6y02jHe6UgdYcm0VzxdXGkGplvS8Q9OZwlKDbB17ne1wSNg5pyhKsAm~ZfhTmr-5OF7HRmREr65XszlCPeXxVakc8JXakxmmWYL-WGsoYL1xkk-A2s28bQDdMYKgwR7oqJspBh8NEk44VA-KgryX1i6VNjUgKrqQ23G6Frx6FBiXjuVCSVpfhQng__"
                        alt=""
                        style={{ width: '100vw', height: '20vh', objectFit: 'cover' }}
                    />
                </div>
                <div className='p-2 d-flex'>
                    <p>🗓️ Meetup</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <h3 style={{ fontSize: '22px', lineHeight: '29.52px' }}>Finance & Investment Elite Social Mixer @Lujiazui</h3>
                    <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6667 2.99996C14.6667 4.28329 15.7167 5.33329 17 5.33329C18.2834 5.33329 19.3334 4.28329 19.3334 2.99996C19.3334 1.71663 18.2834 0.666626 17 0.666626C15.7167 0.666626 14.6667 1.71663 14.6667 2.99996ZM12.3334 2.99996C12.3334 1.71663 11.2834 0.666626 10 0.666626C8.71671 0.666626 7.66671 1.71662 7.66671 2.99996C7.66671 4.28329 8.71671 5.33329 10 5.33329C11.2834 5.33329 12.3334 4.28329 12.3334 2.99996ZM5.33337 2.99996C5.33337 1.71662 4.28337 0.666625 3.00004 0.666625C1.71671 0.666625 0.666708 1.71662 0.666708 2.99996C0.666708 4.28329 1.71671 5.33329 3.00004 5.33329C4.28337 5.33329 5.33337 4.28329 5.33337 2.99996Z" fill="black" />
                    </svg>

                </div>
                {/* date */}
                <div className='d-flex' >
                    <div className='d-flex'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_895)">
                                <path d="M15.8333 2.49992H15V0.833252H13.3333V2.49992H6.66667V0.833252H5V2.49992H4.16667C3.24167 2.49992 2.50833 3.24992 2.50833 4.16659L2.5 15.8333C2.5 16.7499 3.24167 17.4999 4.16667 17.4999H15.8333C16.75 17.4999 17.5 16.7499 17.5 15.8333V4.16659C17.5 3.24992 16.75 2.49992 15.8333 2.49992ZM15.8333 15.8333H4.16667V6.66658H15.8333V15.8333ZM5.83333 8.33325H10V12.4999H5.83333V8.33325Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_895">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>Fri, 12 Oct, 2018</p>
                    </div>
                    <div className='d-flex'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_886)">
                                <path d="M9.99996 1.66675C6.77496 1.66675 4.16663 4.27508 4.16663 7.50008C4.16663 11.8751 9.99996 18.3334 9.99996 18.3334C9.99996 18.3334 15.8333 11.8751 15.8333 7.50008C15.8333 4.27508 13.225 1.66675 9.99996 1.66675ZM5.83329 7.50008C5.83329 5.20008 7.69996 3.33342 9.99996 3.33342C12.3 3.33342 14.1666 5.20008 14.1666 7.50008C14.1666 9.90008 11.7666 13.4918 9.99996 15.7334C8.26663 13.5084 5.83329 9.87508 5.83329 7.50008Z" fill="black" />
                                <path d="M9.99996 9.58341C11.1506 9.58341 12.0833 8.65067 12.0833 7.50008C12.0833 6.34949 11.1506 5.41675 9.99996 5.41675C8.84937 5.41675 7.91663 6.34949 7.91663 7.50008C7.91663 8.65067 8.84937 9.58341 9.99996 9.58341Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_886">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>Ahmedabad, India</p>
                    </div>
                </div>
                <button className="rounded-3" style={{ color: 'red', width: '100%', border: '1px solid #A9AEB8' }}>Visit Website</button>
                {/* lower line */}
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img className="rounded-circle" style={{ width: "3vw", height: "5vh" }} src="https://s3-alpha-sig.figma.com/img/c20f/9a59/15d7211204149d93adda6dfafb5d81f2?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IVoO4d30R~TBKXmV34-sy8cex-z4PfIGbULRMukph6pgaR1P~1~zt7bjWMADAC4S60LvHJ-SoD3P0whyHESvwmPbBjS14X~-sDqSmaLHFoI8j7vRlgxRM3ZiCbNOYHYxzlPhvDu1jr4AMR9YlylviUNhzYaw5CfFZxiZ1XOGBVyd-NeIFggbDcMzPE8sVPW5m11T8R6~OzXCF~rHdjLOQ0u5uZ8lvFqunsPS7ma1lvxanOzkmrpUbwd8bWgdvVD5~XuWBcydnGY28PzEmrJjU0t30aHWoaJ9vBmV2vcKAGjZP2HgOzjcAqoBUB2jS7Cu-CjwuCwlJXXr01mqMAaBag__" alt="" />
                        <h1 className='font-wight-bold h4 p-3'>Sarah West</h1>
                    </div>
                    <div className='d-flex' >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="icon/action/visibility_24px">
                                <path id="icon/action/visibility_24px_2" fill-rule="evenodd" clip-rule="evenodd" d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z" fill="#525252" />
                            </g>
                        </svg>
                        <p style={{ color: '#525252' }}>1.4k views</p>
                        <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="42" height="36" rx="2" fill="#EDEEF0" />
                            <g clip-path="url(#clip0_1_966)">
                                <path d="M25.5 21.06C24.93 21.06 24.42 21.285 24.03 21.6375L18.6825 18.525C18.72 18.3525 18.75 18.18 18.75 18C18.75 17.82 18.72 17.6475 18.6825 17.475L23.97 14.3925C24.375 14.7675 24.9075 15 25.5 15C26.745 15 27.75 13.995 27.75 12.75C27.75 11.505 26.745 10.5 25.5 10.5C24.255 10.5 23.25 11.505 23.25 12.75C23.25 12.93 23.28 13.1025 23.3175 13.275L18.03 16.3575C17.625 15.9825 17.0925 15.75 16.5 15.75C15.255 15.75 14.25 16.755 14.25 18C14.25 19.245 15.255 20.25 16.5 20.25C17.0925 20.25 17.625 20.0175 18.03 19.6425L23.37 22.7625C23.3325 22.92 23.31 23.085 23.31 23.25C23.31 24.4575 24.2925 25.44 25.5 25.44C26.7075 25.44 27.69 24.4575 27.69 23.25C27.69 22.0425 26.7075 21.06 25.5 21.06Z" fill="#2D2D2D" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_966">
                                    <rect width="18" height="18" fill="white" transform="translate(12 9)" />
                                </clipPath>
                            </defs>
                        </svg>


                    </div>
                </div>

            </div>

            {/* job */}

            <div className='m-2 border p-2'>

                <div className='p-2 d-flex'>
                    <p>💼️ Job</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <h3 style={{ fontSize: '22px', lineHeight: '29.52px' }}>Software Developer</h3>
                    <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6667 2.99996C14.6667 4.28329 15.7167 5.33329 17 5.33329C18.2834 5.33329 19.3334 4.28329 19.3334 2.99996C19.3334 1.71663 18.2834 0.666626 17 0.666626C15.7167 0.666626 14.6667 1.71663 14.6667 2.99996ZM12.3334 2.99996C12.3334 1.71663 11.2834 0.666626 10 0.666626C8.71671 0.666626 7.66671 1.71662 7.66671 2.99996C7.66671 4.28329 8.71671 5.33329 10 5.33329C11.2834 5.33329 12.3334 4.28329 12.3334 2.99996ZM5.33337 2.99996C5.33337 1.71662 4.28337 0.666625 3.00004 0.666625C1.71671 0.666625 0.666708 1.71662 0.666708 2.99996C0.666708 4.28329 1.71671 5.33329 3.00004 5.33329C4.28337 5.33329 5.33337 4.28329 5.33337 2.99996Z" fill="black" />
                    </svg>

                </div>
                {/* date */}
                <div className='d-flex' >
                    <div className='d-flex'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_941)">
                                <path d="M11.6667 5.00008V3.33341H8.33342V5.00008H11.6667ZM3.33341 6.66675V15.8334H16.6667V6.66675H3.33341ZM16.6667 5.00008C17.5917 5.00008 18.3334 5.74175 18.3334 6.66675V15.8334C18.3334 16.7584 17.5917 17.5001 16.6667 17.5001H3.33341C2.40841 17.5001 1.66675 16.7584 1.66675 15.8334L1.67508 6.66675C1.67508 5.74175 2.40841 5.00008 3.33341 5.00008H6.66675V3.33341C6.66675 2.40841 7.40841 1.66675 8.33342 1.66675H11.6667C12.5917 1.66675 13.3334 2.40841 13.3334 3.33341V5.00008H16.6667Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_941">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <p>Innovaccer Analytics Private Ltd.</p>
                    </div>
                    <div className='d-flex'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_886)">
                                <path d="M9.99996 1.66675C6.77496 1.66675 4.16663 4.27508 4.16663 7.50008C4.16663 11.8751 9.99996 18.3334 9.99996 18.3334C9.99996 18.3334 15.8333 11.8751 15.8333 7.50008C15.8333 4.27508 13.225 1.66675 9.99996 1.66675ZM5.83329 7.50008C5.83329 5.20008 7.69996 3.33342 9.99996 3.33342C12.3 3.33342 14.1666 5.20008 14.1666 7.50008C14.1666 9.90008 11.7666 13.4918 9.99996 15.7334C8.26663 13.5084 5.83329 9.87508 5.83329 7.50008Z" fill="black" />
                                <path d="M9.99996 9.58341C11.1506 9.58341 12.0833 8.65067 12.0833 7.50008C12.0833 6.34949 11.1506 5.41675 9.99996 5.41675C8.84937 5.41675 7.91663 6.34949 7.91663 7.50008C7.91663 8.65067 8.84937 9.58341 9.99996 9.58341Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_886">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>Noida, India</p>
                    </div>
                </div>
                <button className="rounded-3" style={{ color: '#02B875', width: '100%', border: '1px solid #A9AEB8' }}>Apply on Timejobs</button>
                {/* lower line */}
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img className="rounded-circle" style={{ width: "3vw", height: "5vh" }} src="https://s3-alpha-sig.figma.com/img/c20f/9a59/15d7211204149d93adda6dfafb5d81f2?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IVoO4d30R~TBKXmV34-sy8cex-z4PfIGbULRMukph6pgaR1P~1~zt7bjWMADAC4S60LvHJ-SoD3P0whyHESvwmPbBjS14X~-sDqSmaLHFoI8j7vRlgxRM3ZiCbNOYHYxzlPhvDu1jr4AMR9YlylviUNhzYaw5CfFZxiZ1XOGBVyd-NeIFggbDcMzPE8sVPW5m11T8R6~OzXCF~rHdjLOQ0u5uZ8lvFqunsPS7ma1lvxanOzkmrpUbwd8bWgdvVD5~XuWBcydnGY28PzEmrJjU0t30aHWoaJ9vBmV2vcKAGjZP2HgOzjcAqoBUB2jS7Cu-CjwuCwlJXXr01mqMAaBag__" alt="" />
                        <h1 className='font-wight-bold h4 p-3'>Sarah West</h1>
                    </div>
                    <div className='d-flex' >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="icon/action/visibility_24px">
                                <path id="icon/action/visibility_24px_2" fill-rule="evenodd" clip-rule="evenodd" d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z" fill="#525252" />
                            </g>
                        </svg>
                        <p style={{ color: '#525252' }}>1.4k views</p>
                        <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="42" height="36" rx="2" fill="#EDEEF0" />
                            <g clip-path="url(#clip0_1_966)">
                                <path d="M25.5 21.06C24.93 21.06 24.42 21.285 24.03 21.6375L18.6825 18.525C18.72 18.3525 18.75 18.18 18.75 18C18.75 17.82 18.72 17.6475 18.6825 17.475L23.97 14.3925C24.375 14.7675 24.9075 15 25.5 15C26.745 15 27.75 13.995 27.75 12.75C27.75 11.505 26.745 10.5 25.5 10.5C24.255 10.5 23.25 11.505 23.25 12.75C23.25 12.93 23.28 13.1025 23.3175 13.275L18.03 16.3575C17.625 15.9825 17.0925 15.75 16.5 15.75C15.255 15.75 14.25 16.755 14.25 18C14.25 19.245 15.255 20.25 16.5 20.25C17.0925 20.25 17.625 20.0175 18.03 19.6425L23.37 22.7625C23.3325 22.92 23.31 23.085 23.31 23.25C23.31 24.4575 24.2925 25.44 25.5 25.44C26.7075 25.44 27.69 24.4575 27.69 23.25C27.69 22.0425 26.7075 21.06 25.5 21.06Z" fill="#2D2D2D" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_966">
                                    <rect width="18" height="18" fill="white" transform="translate(12 9)" />
                                </clipPath>
                            </defs>
                        </svg>


                    </div>
                </div>

            </div>
        </>
    )
}

export default Blog
