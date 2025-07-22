import React from 'react';

interface FooterModalProps {
  modalId: string;
  closeModal: () => void;
}

const FooterModal: React.FC<FooterModalProps> = ({ modalId, closeModal }) => {
  // Only render the modal if we have a valid modalId
  if (!modalId) return null;

  // Function to get the appropriate content based on modalId
  const getModalContent = () => {
    switch (modalId) {
      case 'terms-pop-modal':
        return (
          <>
            <div className="border-b border-gray-200 pb-4 mb-4">
              <h2 className="text-2xl font-bold text-black">Terms &amp; Disclaimer</h2>
            </div>
            <div className="prose max-w-none">
              <p className="font-semibold text-black">Effective Date: January 1st, 2019</p>
              <p className="mb-4">
                To review material modifications and their effective dates scroll to the bottom of
                the page.
              </p>
              <div className="space-y-4 text-black">
                <ol className="list-decimal pl-5 space-y-3">
                  <li>
                    <span className="font-semibold">Parties.</span> The parties to these Terms of
                    Use are you, and the owner of this VNSH.com website business, Sicuro Brands LLC
                    ("Sicuro Brands"). All references to "we", "us", "our", this "website" or this
                    "site" shall be construed to mean this website business and Sicuro Brands.
                  </li>
                  <li>
                    <span className="font-semibold">Modification.</span> We reserve the right to
                    modify these Terms of Use at any time, and without prior notice, by posting an
                    amended Terms of Use that is always accessible through the Terms of Use link on
                    this site's home page. You should scroll to the bottom of this page periodically
                    to review material modifications and their effective dates. YOUR CONTINUED USE
                    OF THIS SITE FOLLOWING OUR POSTING OF A MODIFICATION NOTICE OR NEW TERMS OF USE
                    ON THIS SITE WILL CONSTITUTE BINDING ACCEPTANCE OF THE MODIFICATION OR NEW TERMS
                    OF USE.
                  </li>
                  <li>
                    <span className="font-semibold">Use And Restrictions.</span> Subject to these
                    Terms of Use, our Privacy Policy, and the additional policies posted at the
                    bottom of our home page, including without limitation our Return Policy, you may
                    use the public areas of this site, but only for your own internal purposes. You
                    agree not to access (or attempt to access) this site by any means other than
                    through the interface we provide, unless you have been specifically allowed to
                    do so in a separate agreement. You agree not to access (or attempt to access)
                    this site through any automated means (including use of scripts or web
                    crawlers), and you agree to comply with the instructions set out in any
                    robots.txt file present on this site. You are not authorized to (i) resell,
                    sublicense, transfer, assign, or distribute the site, its services or content;
                    (ii) modify or make derivative works based on the site, its services or content;
                    or (iii) "frame" or "mirror" the site, its services or content on any other
                    server or Internet-enabled device. All rights not expressly granted in this
                    Agreement are reserved by us and our licensors.
                  </li>
                  <li>
                    <span className="font-semibold">How We Treat Postings To This Site.</span> We
                    will not treat information that you post to areas of this site that are viewable
                    by others (for example, to a blog, forum or chat-room) as proprietary, private,
                    or confidential. We have no obligation to monitor posts to this site or to
                    exercise any editorial control over such posts; however, we reserve the right to
                    review such posts and to remove any material that, in our judgment, is not
                    appropriate. Posting, transmitting, promoting, using, distributing or storing
                    content that could subject us to any legal liability, whether in tort or
                    otherwise, or that is in violation of any applicable law or regulation, or
                    otherwise contrary to commonly accepted community standards, is prohibited,
                    including without limitation information and material protected by copyright,
                    trademark, trade secret, nondisclosure or confidentiality agreements, or other
                    intellectual property rights, and material that is obscene, defamatory,
                    constitutes a threat, or violates export control laws.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Defamation; Communications Decency Act Notice.
                    </span>{' '}
                    This site is a provider of "interactive computer services" under the
                    Communications Decency Act, 47 U.S.C. Section 230, and as such, our liability
                    for defamation and other claims arising out of any postings to this site by
                    third parties is limited as described therein. We are not responsible for
                    content or any other information posted to this site by third parties. We
                    neither warrant the accuracy of such postings or exercise any editorial control
                    over such posts, nor do we assume any legal obligation for editorial control of
                    content posted by third parties or liability in connection with such postings,
                    including any responsibility or liability for investigating or verifying the
                    accuracy of any content or any other information contained in such postings.
                  </li>
                  <li>
                    <span className="font-semibold">Monitoring.</span> We reserve the right, but not
                    the obligation, to monitor your access and use of this site without notification
                    to you. We may record or log your use in a manner as set out in our Privacy
                    Policy that is accessible though the Privacy Policy link on this site's home
                    page.
                  </li>
                  <li>
                    <span className="font-semibold">Separate Agreements.</span> You may acquire
                    products, services and/or content from this site. We reserve the right to
                    require that you agree to separate agreements as a condition of your use and/or
                    purchase of such products, services and/or content.
                  </li>
                  <li>
                    <span className="font-semibold">Ownership.</span> The material provided on this
                    site is protected by law, including, but not limited to, United States copyright
                    law and international treaties. The copyrights and other intellectual property
                    in the content of this site is owned by us and/or others. Except for the limited
                    rights granted herein, all other rights are reserved.
                  </li>
                  <li>
                    <span className="font-semibold">DMCA Notice.</span> This site is an Internet
                    "service provider" under the Digital Millennium Copyright Act, 17 U.S.C. Section
                    512 ("DMCA"). As Required by the DMCA, this site maintains specific contact
                    information provided below, including an e-mail address, for notifications of
                    claimed infringement regarding materials posted to this site. All notices should
                    be addressed to the contact person specified below (our agent for notice of
                    claimed infringement):
                    <p className="pl-4 mt-2">Notification of Claimed Infringement:</p>
                    <p className="pl-4">
                      Sicuro Brands
                      <br />
                      2121 Lohmans Crossing Rd #504-662,
                      <br />
                      Lakeway, TX 78734
                    </p>
                    <p className="pl-4">Agent's Name/Email Address: customercare (at) VNSH.com</p>
                    <p className="pl-4 mt-2">
                      You may contact our agent for notice of claimed infringement specified above
                      with complaints regarding allegedly infringing posted material and we will
                      investigate those complaints. If the posted material is believed in good faith
                      by us to violate any applicable law, we will remove or disable access to any
                      such material, and we will notify the posting party that the material has been
                      blocked or removed.
                    </p>
                    <p className="pl-4 mt-2">
                      In notifying us of alleged copyright infringement, the DMCA requires that you
                      include the following information: (i) description of the copyrighted work
                      that is the subject of claimed infringement; (ii) description of the
                      infringing material and information sufficient to permit us to locate the
                      alleged material; (iii) contact information for you, including your address,
                      telephone number and/or e-mail address; (iv) a statement by you that you have
                      a good faith belief that the material in the manner complained of is not
                      authorized by the copyright owner, or its agent, or by the operation of any
                      law; (v) a statement by you, signed under penalty of perjury, that the
                      information in the notification is accurate and that you have the authority to
                      enforce the copyrights that are claimed to be infringed; and (vi) a physical
                      or electronic signature of the copyright owner or a person authorized to act
                      on the copyright owner's behalf. Failure to include all of the above-listed
                      information may result in the delay of the processing of your complaint.
                    </p>
                  </li>
                </ol>

                <ol className="list-decimal pl-5 space-y-3 mt-6" start={10}>
                  <li>
                    <span className="font-semibold">Warranty Disclaimers.</span>
                    <p className="pl-4 mt-2">
                      10.1 EXCEPT AS MAY BE PROVIDED IN ANY SEPARATE WRITTEN AGREEMENTS SIGNED BY
                      THE PARTIES, THE SERVICES, CONTENT, AND/OR PRODUCTS ON THIS SITE ARE PROVIDED
                      "AS-IS", AND NEITHER WE NOR ANY OF OUR LICENSORS MAKE ANY REPRESENTATION OR
                      WARRANTY WITH RESPECT TO SUCH PRODUCTS, SERVICES, AND/OR CONTENT. EXCEPT AS
                      MAY BE PROVIDED IN ANY SEPARATE WRITTEN AGREEMENT SIGNED BY THE PARTIES OR
                      SEPARATE AGREEMENT ORIGINATING FROM THIS SITE, THIS SITE AND ITS LICENSORS
                      SPECIFICALLY DISCLAIM, TO THE FULLEST EXTENT PERMITTED BY LAW, ANY AND ALL
                      WARRANTIES, EXPRESS OR IMPLIED, RELATING TO THIS SITE OR PRODUCTS, SERVICES
                      AND/OR CONTENT ACQUIRED FROM THIS SITE, INCLUDING BUT NOT LIMITED TO, IMPLIED
                      WARRANTIES OF MERCHANTABILITY, COMPLETENESS, TIMELINESS, CORRECTNESS,
                      NON-INFRINGEMENT, OR FITNESS FOR ANY PARTICULAR PURPOSE. THIS SITE AND ITS
                      LICENSORS DO NOT REPRESENT OR WARRANT THAT THIS SITE, ITS PRODUCTS, SERVICES,
                      AND/OR CONTENT: (A) WILL BE SECURE, TIMELY, UNINTERRUPTED OR ERROR-FREE OR
                      OPERATE IN COMBINATION WITH ANY OTHER HARDWARE, SOFTWARE, SYSTEM OR DATA, (B)
                      WILL MEET YOUR REQUIREMENTS OR EXPECTATIONS, OR (C) WILL BE FREE OF VIRUSES OR
                      OTHER HARMFUL COMPONENTS.
                    </p>
                    <p className="pl-4 mt-2">
                      10.2 IN USING OUR SITE AND RELATED MATERIALS AND SERVICES, IT REMAINS YOUR
                      RESPONSIBILITY TO COMPLY WITH ANY AND ALL APPLICABLE LOCAL, STATE, AND FEDERAL
                      CODES, REGULATIONS, AND LAWS REGARDING BUILDING STANDARDS, INSPECTION
                      REQUIREMENTS, PERMITTING REQUIREMENTS, PUBLIC SAFETY STANDARDS, AND OTHER
                      RELEVANT CONCERNS. THIS INCLUDES ANY APPLICABLE HOMEOWNERS ASSOCIATION RULES
                      AND/OR HOMEOWNERS INSURANCE GUIDELINES. YOU SHOULD CONTACT PROFESSIONALS
                      AND/OR EXPERTS FOR ASSISTANCE AND/OR ADVICE AS IS NECESSARY TO SAFELY AND
                      PROPERLY COMPLETE ANY IMPLEMENTATION OF THE METHODS AND SYSTEMS DESCRIBED IN
                      THE MATERIALS. YOU ARE RESPONSIBLE FOR YOUR ACTIONS, AND AGREE TO INDEMNIFY
                      AND/OR HOLD HARMLESS SICURO BRANDS FOR ANY LOSS, INJURY, DEATH, CLAIM (WHETHER
                      VALID OR INVALID), JUDGMENT, SUIT, PROCEEDING, DAMAGES, COSTS AND/OR EXPENSES
                      OF ANY NATURE WHATSOEVER ARISING FROM ANY ACTION TAKEN BY YOU WHEN USING OR
                      MISUSING INFORMATION IN THE MATERIALS.
                    </p>
                    <p className="pl-4 mt-2">
                      10.3 ALL PRODUCTS FROM THIS SITE, US OR OUR RELATED COMPANIES ARE STRICTLY FOR
                      INFORMATIONAL PURPOSES ONLY. WHILE ALL ATTEMPTS HAVE BEEN MADE TO VERIFY
                      INFORMATION PROVIDED ON OUR WEBSITE AND IN THE PUBLICATIONS, NEITHER THE
                      AUTHORS NOR THE PUBLISHERS ASSUMES ANY RESPONSIBILITY OR LIABILITY. THE
                      AUTHORS AND PUBLISHERS DISCLAIMS ANY RESPONSIBILITY FOR THE ACCURACY OF THE
                      CONTENT, INCLUDING BUT NOT LIMITED TO ERRORS OR OMISSIONS. LOSS OF PROPERTY,
                      INJURY TO SELF OR OTHERWISE, OR EVEN DEATH CAN OCCUR AS A DIRECT OR INDIRECT
                      CONSEQUENCE OF THE USE AND APPLICATION OF ANY CONTENT FOUND HEREIN.
                    </p>
                    <p className="pl-4 mt-2">
                      10.4 THESE DISCLAIMERS CONSTITUTE AN ESSENTIAL PART OF THIS AGREEMENT. NO
                      PURCHASE OR USE OF THE ITEMS OFFERED BY THIS SITE IS AUTHORIZED HEREUNDER
                      EXCEPT UNDER THESE DISCLAIMERS. IF IMPLIED WARRANTIES MAY NOT BE DISCLAIMED
                      UNDER APPLICABLE LAW, THEN ANY IMPLIED WARRANTIES ARE LIMITED IN DURATION TO
                      THE PERIOD REQUIRED BY APPLICABLE LAW. SOME STATES OR JURISDICTIONS DO NOT
                      ALLOW LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY MAY LAST, SO THE ABOVE
                      LIMITATIONS MAY NOT APPLY TO YOU.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold">Limitation of Liability.</span> IN NO EVENT
                    SHALL THIS SITE AND/OR ITS LICENSORS BE LIABLE TO ANYONE FOR ANY DIRECT,
                    INDIRECT, PUNITIVE, SPECIAL, EXEMPLARY, INCIDENTAL, CONSEQUENTIAL OR OTHER
                    DAMAGES OF ANY TYPE OR KIND (INCLUDING LOSS OF DATA, REVENUE, PROFITS, USE OR
                    OTHER ECONOMIC ADVANTAGE) ARISING OUT OF, OR IN ANY WAY CONNECTED WITH THIS
                    SITE, ITS PRODUCTS, SERVICES, AND/OR CONTENT, ANY INTERRUPTION, INACCURACY,
                    ERROR OR OMISSION, REGARDLESS OF CAUSE, EVEN IF THIS SITE OR OUR LICENSORS HAVE
                    BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                  </li>
                  <li>
                    <span className="font-semibold">Links to This Site.</span> We grant to you a
                    limited, revocable, and nonexclusive right to create a hyperlink to this site
                    provided that the link does not portray us or our products or services in a
                    false, misleading, derogatory, or offensive matter. You may not use any logo,
                    trademark, or tradename that may be displayed on this site or other proprietary
                    graphic image in the link without our prior written consent.
                  </li>
                  <li>
                    <span className="font-semibold">Links to Third Party Websites.</span> We do not
                    review or control third party websites that link to or from this site, and we
                    are not responsible for their content, and do not represent that their content
                    is accurate or appropriate. Your use of any third party site is on your own
                    initiative and at your own risk, and may be subject to the other sites' terms of
                    use and privacy policy.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Participation In Promotions of Advertisers.
                    </span>{' '}
                    You may enter into correspondence with or participate in promotions of
                    advertisers promoting their products, services or content on this site. Any such
                    correspondence or participation, including the delivery of and the payment for
                    products, services or content, are solely between you and each such advertiser.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Consumer Rights Information; California Civil Code Section 1789.3.
                    </span>{' '}
                    If this site charges for services, products, content, or information, pricing
                    information will be posted as part of the ordering process for this site. We
                    maintain specific contact information including an e-mail address for
                    notifications of complaints and for inquiries regarding pricing policies in
                    accordance with California Civil Code Section 1789.3. All correspondence should
                    be addressed to our agent for notice at the following address:
                    <p className="pl-4 mt-2">
                      Notification of Consumer Rights Complaint or Pricing Inquiry:
                    </p>
                    <p className="pl-4">
                      Sicuro Brands
                      <br />
                      2121 Lohmans Crossing Rd #504-662,
                      <br />
                      Lakeway, TX 78734
                      <br />
                      Contact: customercare (at) VNSH.com
                    </p>
                    <p className="pl-4 mt-2">
                      You may contact us with complaints and inquiries regarding pricing and we will
                      investigate those matters and respond to the inquiries.
                    </p>
                    <p className="pl-4 mt-2">
                      The Complaint Assistance Unit of the Division of Consumer Services of the
                      Department of Consumer Affairs may be contacted in writing at 1020 N. Street,
                      #501, Sacramento, CA 95814, or by telephone at 1-916-445-1254.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold">Arbitration.</span> Except for actions to
                    protect intellectual property rights and to enforce an arbitrator's decision
                    hereunder, all disputes, controversies, or claims arising out of or relating to
                    this Agreement or a breach thereof shall be submitted to and finally resolved by
                    arbitration under the rules of the American Arbitration Association ("AAA") then
                    in effect. There shall be one arbitrator, and such arbitrator shall be chosen by
                    mutual agreement of the parties in accordance with AAA rules. The arbitration
                    shall take place in Denver, Colorado, USA, and may be conducted by telephone or
                    online. The arbitrator shall apply the laws of the State of Colorado, USA to all
                    issues in dispute. The controversy or claim shall be arbitrated on an individual
                    basis, and shall not be consolidated in any arbitration with any claim or
                    controversy of any other party. The findings of the arbitrator shall be final
                    and binding on the parties, and may be entered in any court of competent
                    jurisdiction for enforcement. Enforcements of any award or judgment shall be
                    governed by the United Nations Convention on the Recognition and Enforcement of
                    Foreign Arbitral Awards. Should either party file an action contrary to this
                    provision, the other party may recover attorney's fees and costs up to $1000.00.
                  </li>
                  <li>
                    <span className="font-semibold">Jurisdiction And Venue.</span> The courts of
                    Denver County in the State of Colorado, USA and the nearest U.S. District Court
                    in the State of Colorado shall be the exclusive jurisdiction and venue for all
                    legal proceedings that are not arbitrated under these Terms of Use.
                  </li>
                  <li>
                    <span className="font-semibold">Controlling Law.</span> This Agreement shall be
                    construed under the laws of the State of Colorado, USA, excluding rules
                    regarding conflicts of law. The application of the United Nations Convention on
                    Contracts for the International Sale of Goods is expressly excluded.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Onward Transfer of Personal Information Outside Your Country of Residence.
                    </span>{' '}
                    Any personal information which we may collect on this site will be stored and
                    processed in our servers located only in the United States. If you reside
                    outside the United States, you consent to the transfer of personal information
                    outside your country of residence to the United States.
                  </li>
                  <li>
                    <span className="font-semibold">Severability.</span> If any provision of these
                    terms is declared invalid or unenforceable, such provision shall be deemed
                    modified to the extent necessary and possible to render it valid and
                    enforceable. In any event, the unenforceability or invalidity of any provision
                    shall not affect any other provision of these terms, and these terms shall
                    continue in full force and effect, and be construed and enforced, as if such
                    provision had not been included, or had been modified as above provided, as the
                    case may be.
                  </li>
                  <li>
                    <span className="font-semibold">Force Majeure.</span> We shall not be liable for
                    damages for any delay or failure of delivery arising out of causes beyond our
                    reasonable control and without our fault or negligence, including, but not
                    limited to, Acts of God, acts of civil or military authority, fires, riots,
                    wars, embargoes, Internet disruptions, hacker attacks, or communications
                    failures.
                  </li>
                  <li>
                    <span className="font-semibold">Privacy.</span> Please review this site's
                    Privacy Policy which also governs your visit to this site. Our Privacy Policy is
                    always accessible on our site's home page.
                  </li>
                  <li>
                    <span className="font-semibold">Purchases.</span> Credit Cards - We accept the
                    following credit cards: Visa, MasterCard, and Discover. There is no surcharge
                    for using your credit card to make purchases. Please be sure to provide your
                    exact billing address and telephone number (i.e. the address and phone number
                    your credit card bank has on file for you). Incorrect information will cause a
                    delay in processing your order.
                    <p className="pl-4 mt-2">
                      Money Orders, Cashier's Checks, Company Checks, &amp; Personal Checks We
                      accept money orders, cashier's checks, personal checks, and company checks in
                      U.S. Dollars only. Orders are processed upon receipt of a money order or
                      cashier's check. For personal and company checks, please allow up to 10
                      banking days after receipt for clearance of funds before the order is
                      processed. We cannot guarantee the availability of a product by the time funds
                      clear or payment is received. We will charge a $25 fee on all returned checks.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold">Multiple Product Orders.</span> For a multiple
                    product order, we will make every attempt to ship all products contained in the
                    order at the same time. Products that are unavailable at the time of shipping
                    will be shipped as they become available, unless you inform us otherwise. You
                    will only be charged for products contained in a given shipment, plus any
                    applicable shipping charges. You will only be charged for shipping at the rate
                    quoted to you on your purchase receipt. The entirety of this shipping charge may
                    be applied to the first product(s) shipped on a multiple shipment order.
                  </li>
                  <li>
                    <span className="font-semibold">Order Acceptance Policy.</span> Your receipt of
                    an electronic or other form of order confirmation does not signify our
                    acceptance of your order, nor does it constitute confirmation of our offer to
                    sell. Sample Store reserves the right at any time after receipt of your order to
                    accept or decline your order for any reason or to supply less than the quantity
                    you ordered of any item.
                  </li>
                  <li>
                    <span className="font-semibold">Other Conditions.</span> These Conditions will
                    supersede any terms and/or conditions you include with any purchase order,
                    regardless of whether Sample Store. signs them or not. We reserve the right to
                    make changes to this site and these Conditions at any time.
                  </li>
                  <li>
                    <span className="font-semibold">Out-of-Stock Products.</span> We will ship your
                    product as it becomes available. Usually, products ship the same day if ordered
                    by 5:00PM, or by the next business day if your order is received after this time
                    and for orders received on Saturday, Sunday or any major holiday. However, there
                    may be times when the product you have ordered is out-of-stock which will delay
                    fulfilling your order. We will keep you informed of any products that you have
                    ordered that are out-of-stock and unavailable for immediate shipment. You may
                    cancel your order at any time prior to shipping.
                  </li>
                  <li>
                    <span className="font-semibold">Contests and Special Offers.</span> To keep you
                    informed about our latest offers, we may notify you of current promotions,
                    specials and new additions to the Sample Store site. You may unsubscribe from
                    our newsletters by following the unsubscribe instructions in any email you
                    receive from us.
                    <p className="pl-4 mt-2">
                      When entering any of our contests or prize drawings, you provide your name,
                      email address and mailing address. If you win, we will send the prize to the
                      address entered and notify you by email. When you enter a contest or drawing
                      you are also included in our newsletter list to receive notice of promotions,
                      specials and new additions to the Sample Store site. You may unsubscribe from
                      this news list by following the unsubscribe instructions in any email
                      received.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold">Returns.</span> We offer what we believe to be
                    the "best in industry" policy for returns. Please review our Return Policy for
                    terms and conditions.
                  </li>
                  <li>
                    <span className="font-semibold">Shipping Policy.</span> Shipping Time – Most
                    orders received before 5:00PM will ship the same day, provided the product
                    ordered is in stock. Most orders received after 5:00 PM will ship the next
                    business day. Orders are not processed or shipped on Saturday or Sunday, except
                    by prior arrangement.
                    <p className="pl-4 mt-2">
                      We cannot guarantee when an order will arrive. Consider any shipping or
                      transit time offered to you by Sample Store or other parties only as an
                      estimate. We encourage you to order in a timely fashion to avoid delays caused
                      by shipping or product availability.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold">Taxes.</span> Our Store shall automatically
                    charge and withhold the applicable sales tax for orders to be delivered to
                    addresses within the same state. For orders shipped to other states, you are
                    solely responsible for all sales taxes or other taxes.
                  </li>
                  <li>
                    <span className="font-semibold">Typographical Errors.</span> In the event a
                    product is listed at an incorrect price due to typographical error or error in
                    pricing information received from our suppliers, Our Store shall have the right
                    to refuse or cancel any orders placed for product listed at the incorrect price.
                    Our Store shall have the right to refuse or cancel any such orders whether or
                    not the order has been confirmed and your credit card charged. If your credit
                    card has already been charged for the purchase and your order is canceled, Our
                    Store shall immediately issue a credit to your credit card account in the amount
                    of the incorrect price.
                  </li>
                </ol>
                <p className="pl-4 mt-6">Material Modifications Since January 1, 2019: NONE</p>
              </div>
            </div>
          </>
        );

      case 'privacy-policy-modal':
        return (
          <>
            <div className="border-b border-gray-200 pb-4 mb-4">
              <h2 className="text-2xl font-bold text-black">Privacy Policy</h2>
            </div>
            <div className="prose max-w-none space-y-4 text-black">
              <p className="font-semibold">Effective Date: January 1st, 2019</p>
              <p>
                To review material modifications and their effective dates scroll to the bottom of
                the page.
              </p>

              <div className="space-y-4">
                <p>
                  Sicuro Brands, LLC ("Sicuro Brands") owns and operates this VNSH.com website
                  business. All references to "we", "us", this "website" or this "site" shall be
                  construed to mean Sicuro Brands Publishing. We understand that visitors to this
                  website are concerned about the privacy of information. The following describes
                  our privacy policy regarding information, including Personal Information (defined
                  below), that we collect through this website.
                </p>

                <p>
                  By using this website you are accepting the practices described in this Privacy
                  Policy.
                </p>

                <h3 className="font-bold text-lg mt-6 mb-2">How We Modify This Privacy Policy</h3>
                <p>
                  We reserve the right to modify this Privacy Policy at any time, and without prior
                  notice, by posting an amended Privacy Policy that is always accessible by clicking
                  on the "Privacy Policy" link on this site's home page. Your continued use of this
                  site indicates your acceptance of the amended Privacy Policy.
                </p>

                <h3 className="font-bold text-lg mt-6 mb-2">
                  The Types of Information We Collect And How We Collect It
                </h3>
                <p>
                  <strong>Personal Information.</strong> We collect personal information that may be
                  used to identify you ("Personal Information"). We collect Personal Information
                  from you when you register on our site, place an order, subscribe to our
                  newsletter, respond to a survey, fill out a form or order an affiliate product
                  from another company we are working with. Personal Information that we collect may
                  vary with each separate purpose for which you provide it, and it may include one
                  or more of the following categories: name, physical address, an email address,
                  phone number, credit card information including credit card number, expiration
                  date, and billing address.
                </p>

                <p>
                  <strong>Usage Data.</strong> We reserve the right to collect information based on
                  your usage of this site which is information collected automatically from this
                  site (or third party services employed in this site), which can include: the IP
                  addresses or domain names of the computers utilized by the users who use this
                  site, the URI addresses (Uniform Resource Identifier), the time of the request,
                  the method utilized to submit the request to the server, the size of the file
                  received in response, the numerical code indicating the status of the server's
                  answer (successful outcome, error, etc.), the country of origin, the features of
                  the browser and the operating system utilized by the user, the various time
                  details per visit (e.g., the time spent on each page within the site) and the
                  details about the path followed within the site with special reference to the
                  sequence of pages visited, heat map data, and other parameters about the device
                  operating system and/or the user's IT environment ("Usage Data"). Usage Data is
                  essentially anonymous when collected, but could be used indirectly to identify a
                  person.
                </p>

                <h3 className="font-bold text-lg mt-6 mb-2">How We Use Your Information</h3>
                <p>
                  Any of the information we collect from you may be used in one of the following
                  ways:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    To personalize your experience (your information helps us to better respond to
                    your individual needs)
                  </li>
                  <li>
                    To improve our website (we continually strive to improve our website offerings
                    based on the information and feedback we receive from you)
                  </li>
                  <li>
                    To improve customer service (your information helps us to more effectively
                    respond to your customer service requests and support needs)
                  </li>
                  <li>To administer a contest, promotion, survey or other site feature</li>
                  <li>To send periodic emails</li>
                </ul>

                <p>
                  The email address you provide for order processing, may be used to send you
                  information and updates pertaining to your order or request, in addition to
                  receiving occasional company news, updates, promotions, related product or service
                  information, etc.
                </p>

                <p className="font-semibold">
                  Note: If at any time you would like to unsubscribe from receiving future emails,
                  we include unsubscribe instructions at the bottom of each email.
                </p>

                <h3 className="font-bold text-lg mt-6 mb-2">
                  How We Disclose Or Share Your Information
                </h3>
                <p>
                  <strong>California Privacy Rights.</strong> California Civil Code Section 1798.83
                  permits California residents to request certain information regarding disclosure
                  of their Personal Information to third parties for purposes of direct marketing.
                  You may request further information about our compliance with California Civil
                  Code Section 1798.83 at the following email address:{' '}
                  <a href="mailto:customercare@vnsh.com" className="text-blue-600 hover:underline">
                    customercare@vnsh.com
                  </a>
                  .
                </p>

                <h3 className="font-bold text-lg mt-6 mb-2">How We Protect Your Information</h3>
                <p>
                  We will implement reasonable and appropriate security procedures consistent with
                  prevailing industry standards to protect data from unauthorized access by physical
                  and electronic intrusion.
                </p>
                <p>
                  We utilize password protected directories and databases to safeguard your
                  information.
                </p>
                <p>
                  We offer the use of a secure server. All supplied sensitive/credit information is
                  transmitted via Secure Socket Layer (SSL) technology and then encrypted into our
                  Payment gateway providers database only to be accessible by those authorized with
                  special access rights to such systems, and are required to keep the information
                  confidential.
                </p>
                <p>
                  After a transaction, your Personal Information (credit cards, social security
                  numbers, financials, etc.) will not be stored on our servers.
                </p>
                <p>
                  Despite all of these efforts to protect your information, no data transmission
                  over the Internet can be guaranteed to be 100% secure. We cannot, therefore,
                  warrant or ensure the security of any information you transmit to us or from our
                  online products or services, and you do so at your own risk.
                </p>

                <h3 className="font-bold text-lg mt-6 mb-2">Cookies and Tracking Technologies</h3>
                <p>
                  <strong>1st Party Cookies.</strong> We use 1<sup>st</sup> party cookies (passed by
                  us) to keep track of your current shopping session to personalize your experience
                  and so that you may retrieve your shopping cart at any time.
                </p>

                <p>
                  <strong>3rd Party Cookies for Web Analytics and Reporting.</strong> We reserve the
                  right to use web analytics services provided by 3rd parties. These services use
                  3rd party cookies (cookies passed by others, not by us) to collect Usage Data
                  about your use of this site. These web analytics services may also transfer this
                  information to third parties where required to do so by law, or where such third
                  parties process the information on the service's behalf.
                </p>

                <p>
                  <strong>Google Analytics</strong> is a web analysis service provided by Google
                  Inc. ("Google"). Google utilizes the data collected to track and examine the use
                  of this site, to prepare reports on its activities, and to share them with other
                  Google services. Information collected: cookie and Usage Data. Visit Google's
                  Privacy Policy{' '}
                  <a
                    href="https://www.google.com/intl/en/policies/?fg=1"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  . You may opt out of the Google Analytics service with the Google's Browser Add-on
                  that's available{' '}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout/"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  .
                </p>

                <h3 className="font-bold text-lg mt-6 mb-2">Do Not Track Requests</h3>
                <p>
                  Some Web browsers incorporate a "Do Not Track" feature that signals to websites
                  that you visit that you do not want to have your online activity tracked. Each
                  browser communicates "Do Not Track" signals to websites differently, making it
                  unworkable to honor each and every request correctly. In order to alleviate any
                  communication error between browsers and websites, we do not respond to "Do Not
                  Track" signals at this time. As the technology and communication between browser
                  and website improves, we will reevaluate the ability to honor "Do Not Track"
                  signals and may make changes to our policy.
                </p>

                <h3 className="font-bold text-lg mt-6 mb-2">
                  Children's Online Privacy Protection Act Compliance
                </h3>
                <p>
                  We are committed to preserving online privacy for all of its website visitors,
                  including children. This site is a general audience site. Consistent with the
                  Children's Online Privacy Protection Act (COPPA), we will not knowingly collect
                  any information from, or sell to, children under the age of 13. If you are a
                  parent or guardian who has discovered that your child under the age of 13 has
                  submitted his or her personally identifiable information without your permission
                  or consent, we will remove the information from our active list, at your request.
                </p>

                <h3 className="font-bold text-lg mt-6 mb-2">Contacting Us</h3>
                <p>
                  If there are any questions regarding this privacy policy you may contact us using
                  the information found at this{' '}
                  <a href="/pages/contact" className="text-blue-600 hover:underline">
                    link
                  </a>{' '}
                  or by mail at:
                </p>
                <p className="mt-2">
                  Sicuro Brands
                  <br />
                  2121 Lohmans Crossing Rd #504-662,
                  <br />
                  Lakeway, TX 78734
                </p>
              </div>
            </div>
          </>
        );

      case 'shipping-policy-modal':
        return (
          <>
            <div className="border-b border-gray-200 pb-1 mb-3">
              <h2 className="text-2xl font-bold text-black">Shipping Policy</h2>
            </div>
            <div className="prose max-w-none space-y-2 text-black">
              <p className="px-1">
                Orders are shipped within 24 hours of placing your order Sunday through Thursday.
              </p>
              <p className="px-1">
                Orders received Friday, Saturday and Sunday will go out first thing Monday morning.
              </p>
              <p className="px-1">
                You can reach support with any questions at{' '}
                <a href="tel:1-888-526-1885" className="font-bold text-blue-600 hover:underline">
                  1-888-526-1885
                </a>
                .
              </p>
            </div>
          </>
        );

      case 'return-policy-modal':
        return (
          <>
            <div className="border-b border-gray-200 pb-1 mb-3">
              <h2 className="text-2xl font-bold text-black">Returns Policy</h2>
            </div>
            <div className="prose max-w-none space-y-2 text-black">
              <p className="px-1">
                If you would like to return your purchase for a refund, you must reach out to
                customer support by either email or phone{' '}
                <a href="tel:1-888-526-1885" className="font-bold text-blue-600 hover:underline">
                  (1-888-526-1885)
                </a>{' '}
                to receive a return merchandise authorization (RMA).
              </p>
              <p className="px-1">
                If you return your purchase without a RMA, we can not guarantee you credit. You have
                up to 60 days from purchase to request a refund. We will pay for the shipping label
                back to our warehouse and once we receive the item we will issue you a prompt
                refund.
              </p>
            </div>
          </>
        );

      case 'giveaway-terms-modal':
        return (
          <>
            <div className="border-b border-gray-200 pb-1 mb-3">
              <h2 className="text-2xl font-bold text-black">Terms & Conditions</h2>
            </div>
            <div className="prose max-w-none space-y-2 text-black">
              <p className="font-semibold">SICURO BRANDS LLC</p>
              <p className="font-semibold">Springfield Prodigy Gun Giveaway Official Rules</p>
              <p className="font-semibold mb-4">SPONSORED BY: VNSH & PAIN SAFARI</p>
              <p className="mb-4">
                Promotion Period: The Promotion starts at 12:00 a.m. (all times Central Standard
                Time) on September X, 2024 and ends at 11:59 p.m. on October X, 2024 (the "Promotion
                Period"). All entries must be received during the Promotion Period and meet other
                requirements in these Official Rules to be eligible to win a prize. Drawing will be
                held October 8th, 2023. Winner will be announced after the potential winner is
                verified and confirmed.
              </p>

              <p className="mb-4">
                <b>
                  NO PURCHASE IS NECESSARY TO ENTER OR WIN A PRIZE. A PURCHASE WILL NOT IMPROVE YOUR
                  CHANCES OF WINNING. WINNER MAY BE REQUIRED TO PARTICIPATE IN THE PRIZE FULFILLMENT
                  PROCESS AND SIGN DOCUMENTS, SUCH AS A RELEASE, AS DETAILED BELOW.
                </b>
              </p>
              <p className="mb-4">
                <b>
                  BY PARTICIPATING, YOU AGREE TO THESE OFFICIAL RULES, WHICH ARE A CONTRACT. WITHOUT
                  LIMITATION, THIS CONTRACT INCLUDES INDEMNITIES TO THE SPONSOR (DEFINED BELOW) FROM
                  YOU AND A LIMITATION OF YOUR RIGHTS AND REMEDIES. THESE RULES CONTAIN ARBITRATION
                  AND DISPUTE RESOLUTION PROVISIONS THAT AFFECT THE WAY IN WHICH ANY CLAIM OR
                  DISPUTE BETWEEN YOU AND THE SPONSOR WILL BE RESOLVED. SCROLL DOWN TO SECTION 9 TO
                  SEE THE ARBITRATION AND DISPUTE RESOLUTION PROVISIONS.
                </b>
              </p>
              <p className="mb-6">
                <b>THIS SWEEPSTAKES IS VOID WHERE PROHIBITED OR EXCLUDED.</b>
              </p>

              <ol className="list-decimal pl-5 space-y-4">
                <li>
                  <b>SPONSOR AND ADMINSTRATOR.</b> The Sweepstakes is sponsored in the Territory by
                  Sicuro Brands LLC, 2420 Ave. Albizu Campos PMB 179, Rincon PR 00677.
                </li>
                <li>
                  <b>SWEEPSTAKES DESCRIPTION.</b> Each <b>SWEEPSTAKES</b> consists of an online
                  sweepstakes (the "Sweepstakes") in the 50 United States and the District of
                  Columbia (the "Territory") that begins and ends at the dates and times listed on
                  the Sweepstakes Page for that specific sweepstakes (the "Sweepstakes Period").
                  Sweepstakes is void in Rhode Island, Hawaii, Puerto Rico and other U.S.
                  Commonwealths, Territories and jurisdictions (including overseas military
                  installations) and where prohibited. The Sweepstakes is governed by these Official
                  Rules along with any other additional rules on the Sweepstakes Page.
                </li>
                <li>
                  <b>WHO IS ELIGIBLE TO ENTER/TO WIN.</b>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                      <b>Eligibility.</b> The SWEEPSTAKES is open only to natural persons who are
                      legal residents of the Territory, at least twenty-one (21) years of age at the
                      time of entry, and legally eligible to own and possess a firearm in the
                      Territory. Persons in the following categories are NOT eligible to
                      participate: any person who on or after the beginning of this Sweepstakes was
                      or is (a) a director, officer, employee, agent, or independent contractor of
                      Sponsor; (b) a director, officer, employee, agent, or independent contractor
                      of any entity engaged to assist with the creation, administration,
                      advertising, or management of the Sweepstakes; or (c) an immediate family
                      member (defined as spouse, IRS-dependent, or biological, foster, in-law,
                      adoptive, or step- mother, father, sister, brother, daughter, or son) of, or
                      who resides in the same household as, any person in any of the preceding
                      categories.
                    </li>
                  </ul>
                  <p className="mt-2">
                    Any attempt by Participant to obtain more than the stated number of entries by
                    using multiple/different identities, email addresses and/or any other method
                    will void that Participant's entry and that Participant may be disqualified from
                    participating in any and all Sicuro Brands Sweepstakes. In the event of a
                    dispute regarding the identity of the person submitting an entry, the entry will
                    be deemed submitted by the person in whose name the email account (provided via
                    the Entry Form) is registered ("Authorized Account Holder"). The Authorized
                    Account Holder is the natural person who is assigned to the email address by an
                    internet access provider, on-line service provider, or other organization that
                    is responsible for assigning email addresses, or the domain associated with the
                    submitted email address. No mechanically or programmatically reproduced entries
                    are permitted. Sponsor will not verify receipt of entries for Entrants. All
                    entries submitted become the sole property of Sponsor and will not be returned.
                    Sponsor is not responsible for lost, late, misdirected, illegible, or damaged
                    entries.
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                      <b>Agreement To Official Rules.</b> Sweepstakes will be conducted in the
                      Territory by Sicuro Publishing LLC (the "Sponsor"), and each person who
                      participates in the Sweepstakes (each a "Participant") unconditionally accepts
                      and agrees to comply with, abide by, and have all participation subject to
                      these Official Rules, any other additional rules on the Sweepstakes Page, and
                      the decisions of the Sponsor, which shall be final and binding with respect to
                      all aspect of the Sweepstakes in the Territory.
                    </li>
                    <li>
                      <b>To Be Eligible To Win.</b> Winning the prize requires that the potential
                      winner of the prize is, and remains, in compliance with these Official Rules
                      and any other additional rules on the Sweepstakes Page. Until a potential
                      winner is verified to be eligible and in compliance with these Official Rules
                      and any other additional rules on the Sweepstakes Page, the potential winner
                      is, and will remain, a potential winner, unless the potential winner is
                      disqualified for not complying with the Official Rules and/or not being
                      eligible to participate in the Sweepstakes. Sponsor reserves the right to
                      disqualify any potential winner who Sponsor, in its sole and absolute
                      discretion, determines is not permitted by law to receive a prize. Sponsor is
                      not required to conduct any advertising or public relations associated with a
                      winner.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>HOW TO ENTER.</b> By entering this sweepstakes, you agree that you are
                  subscribing to the Sponsor's email newsletter(s) as indicated on the Sweepstakes
                  Page for that specific sweepstakes or granting your approval for Sponsor to add
                  you to their newsletter subscription list. Participant must continue to be
                  subscribed to all specified newsletters throughout the Sweepstakes Period to be
                  eligible to win a prize. If a Participant has unsubscribed during the Sweepstakes
                  Period the Participant will be ineligible to win.
                  <p className="mt-2">
                    Online Entry: There is only one way to enter any Sweepstakes. Follow the link
                    provided and complete the required information on the entry form. At minimum you
                    will be required to provide your first name, your email, and confirm you are at
                    least 21 years of age or older.
                  </p>
                  <p className="mt-2">
                    Bonus Entries: A Sweepstakes may provide for additional entries ("Bonus
                    Entries"). A Participant may only receive a Bonus Entry if the minimum mandatory
                    entry has been completed. Bonus Entries are optional and may not be available on
                    every Sweepstakes. Participant must complete the required action to earn the
                    Bonus Entry.
                  </p>
                  <p className="mt-2">
                    For certain Sweepstakes, an additional opportunity may be listed on the
                    Sweepstakes Page to earn bonus entries in that Sweepstakes via a "referral"
                    program whereby you can post a unique link in your social media feeds (all of
                    which are free) and receive additional entries into the Sweepstakes for each
                    eligible person who follows your link and enters the applicable Sweepstakes
                    online. When this opportunity exists for a given Sweepstakes, it will be listed
                    on the applicable Sweepstakes Page with complete details. It is your
                    responsibility to ensure that posting of any referral link is compliant with all
                    state and federal laws as well as the terms of service for the platform on which
                    you are posting.
                  </p>
                  <p className="mt-2">
                    By participating in any Sweepstakes, you unconditionally accept and agree to
                    comply with and abide by these Official Rules, the additional details on the
                    applicable Sweepstakes Page, the terms of use, and all decisions of the Sponsor,
                    which shall be final and binding in all respects. All electronic entries for any
                    Sweepstakes Period must be received during that Sweepstakes Period. Proof of
                    transmission is not proof of receipt.
                  </p>
                </li>
                <li>
                  <b>SWEEPSTAKES - PRIZES/ODDS/DETAILS.</b> The prize(s) and value(s) available for
                  any Sweepstakes will be listed on the Sweepstakes Page for that Sweepstakes. The
                  odds of winning in any Sweepstakes depend on the number of eligible entries
                  received for that Sweepstakes.
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                      <b>Winner Selection and Notification.</b> Each Sweepstakes drawing will be
                      selected in a random drawing from among the eligible entries received during
                      the applicable Sweepstakes Period for that drawing per the "How to Enter" rule
                      above, and will occur within approximately three (3) days after the end of the
                      applicable Sweepstakes Period. Each potential winner will be notified via
                      email using the contact information supplied at the time of entry. The
                      notification will include instructions on how to contact Sponsor to provide
                      name, address or other information that may be necessary to complete
                      validation of eligibility, obtain and complete Prize Claim Documents, and
                      delivery of prize. No liability is assumed for any winner notification that is
                      lost, intercepted, or not received by a potential winner for any reason. If a
                      potential winner does not respond within 3 days after the first notification
                      attempt, or if the prize or prize notification is returned as unclaimed or
                      undeliverable to such potential winner, such potential winner may be
                      disqualified and an alternate winner may be selected. If a potential winner is
                      found to be ineligible, or if he or she has not complied with these Official
                      Rules and any other additional rules on the Sweepstakes Page, or declines a
                      prize for any reason prior to award, such potential winner will be
                      disqualified and an alternate winner may be selected.
                    </li>
                    <li>
                      <b>Additional Prize Information.</b> Sponsor may, at its sole and absolute
                      discretion, select an alternative potential winner should any potential winner
                      be disqualified. Sponsor will provide for standard trackable delivery of the
                      prize in the Sweepstakes. The prizewinner shall be solely responsible for all
                      federal, state, and/or local taxes and other fees associated with prize
                      receipt and/or use. The prize may not be assigned or changed except at the
                      sole and absolute discretion of Sponsor. Prizes pictured in advertising,
                      marketing, or promotional materials are for illustrative purposes only. In the
                      event there is a discrepancy or inconsistency between statements contained in
                      any such materials and the terms and conditions of these Official Rules, these
                      Official Rules together with the additional rules on the Sweepstakes Page for
                      the specific prize shall prevail, govern and control.
                    </li>
                    <li>
                      <b>Transfer of Firearm.</b> Transfer of any prize falling under the legal
                      definition of a firearm, shall be conducted through a federally-licensed
                      Federal Firearms License (FFL) dealer. All firearms transfers will be
                      conducted in strict compliance with all applicable Federal, State and Local
                      laws. If, at any time prior to fulfillment of the prize, the winner is unable,
                      unwilling, or barred from obtaining or using a firearm, the winner will be
                      declared ineligible. By entering this sweepstakes, you acknowledge that you
                      are not legally prohibited from owning or taking possession of a firearm.
                      <p className="mt-2">
                        If, after any prize winner is determined and declared and the prize is
                        shipped to the prize winner's FLL dealer of choice in his or her state of
                        residence, the prize winner is unwilling or unable to receive a transfer of
                        the prize from his or her chosen federal firearms licensee (for failure to
                        pass a required background check, legal prohibition of the transfer, or any
                        other reason), Sponsor reserves right, in its sole and absolute discretion,
                        to either terminate the Sweepstakes immediately or select an alternate prize
                        winner in a random selection of all remaining eligible entries.
                      </p>
                    </li>
                    <li>
                      <b>General Prize Conditions.</b> Prizes are non-transferable, and no cash
                      alternative or prize substitution will be allowed, except in Sponsor's sole
                      and absolute discretion. A substitute of comparable or greater value may be
                      awarded if any prize listed becomes unavailable for any reason. Potential
                      winner (a) is responsible for any taxes due as a result of acceptance of the
                      prize, and for any other fees or costs associated with acceptance or use of
                      any prize not expressly included in the prize description. Winners of prizes
                      valued at $600 or more will be issued an IRS Form 1099 for the value of the
                      prize.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>PRIZE CLAIM DOCUMENTS.</b> The Prize Claim Documents may include, but are not
                  limited to: a Declaration or Affidavit of Eligibility (as solely determined by
                  Sponsor), Release of Liability, a Publicity Release (where lawful), a Federal IRS
                  form W-9 for tax filing purposes (for the year a prize is received), and such
                  other documents as may be determined by Sponsor. All Prize Claim Documents must be
                  returned as provided in the directions to the potential winner. Prizes that
                  require shipping to the winner will ship approximately four to six weeks from date
                  of verification. For prize that require in-person delivery through an FLL, Sponsor
                  will coordinate such delivery with the winner. No delivery through an FLL will be
                  permitted until all verifications and authorizations have been confirmed. If
                  verification of any information provided results in forfeiture, no prize will be
                  awarded to that individual. Upon prize forfeiture, no compensation will be given.
                </li>
                <li>
                  <b>RELEASE.</b> By receipt of any prize, winner agrees to release and hold
                  harmless Sponsor and any other third-party providers or their respective
                  subsidiaries, affiliates, suppliers, distributors, advertising/promotion agencies,
                  and prize suppliers, and each of their respective parent companies and each such
                  company's officers, directors, employees and agents (collectively, the "Released
                  Parties") from and against any claim or cause of action, including, but not
                  limited to, personal injury, death, or damage to or loss of property, arising out
                  of participation in the Sweepstakes or receipt or use or misuse of any prize.
                </li>
                <li>
                  <b>GENERAL PROVISIONS.</b>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                      Sponsor reserves the right to cancel, suspend and/or modify any Sweepstakes,
                      or any part of it, if any fraud, technical failures, human error or any other
                      factor impairs the integrity or proper functioning of the Sweepstakes, as
                      determined by Sponsor in its sole and absolute discretion. In such event,
                      Sponsor, in its sole and absolute discretion, may elect to hold a random
                      drawing from among all eligible entries received up to the date of
                      discontinuance for any or all of the prizes offered in the Sweepstakes.
                      Sponsor reserves the right, in its sole and absolute discretion, to disqualify
                      any individual it finds to be tampering with the entry process or the
                      operation of the Sweepstakes or to be acting in violation of the Official
                      Rules of this or any other promotion or in an unsportsmanlike, fraudulent,
                      deceptive, or disruptive manner. Any attempt by any person to deliberately
                      undermine the legitimate operation of the Sweepstakes may be a violation of
                      criminal and civil law, and, should such an attempt be made, Sponsor reserves
                      the right to seek damages from any such person to the fullest extent permitted
                      by law. Sponsor's failure to enforce any term of these Official Rules or any
                      other additional rules on the Sweepstakes Page shall not constitute a waiver
                      of that provision.
                    </li>
                  </ul>
                  <p className="mt-2">
                    Sponsor's computer is the official timekeeping device for the Sweepstakes. No
                    automated entry devices, bots, spiders, mechanisms, programs, or otherwise are
                    permitted. Sponsor is not responsible for lost, late, incomplete, invalid,
                    illegible, misdirected, or otherwise non-received entries. Entries may not be
                    acknowledged or returned.
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                      Each Participant shall only participate in the Sweepstakes on his or her own
                      behalf and can not participate or enter on behalf of any other person or
                      entity. Any attempt by Participant to obtain more than the allowed number of
                      entries by use of multiple/different/fictitious/false email addresses, or any
                      other methods, shall void Participant's entry and Participant will be
                      disqualified from Participation in the Sweepstakes.
                    </li>
                    <li>
                      By entering the Sweepstakes, Participants fully and unconditionally agree to
                      be bound by these rules and the decisions of the Sponsor, which will be final
                      and binding in all matters relating to the Sweepstakes. Sponsor reserves the
                      right to block entry to any individual for any or all Sweepstakes conducted by
                      Sponsor, whether current or in the future, if such individual is determined to
                      be found in violation of these rules.
                    </li>
                    <li>
                      Participant agrees that the Sweepstakes and any prizes awarded are provide "AS
                      IS" and the Sponsor makes no warranty, representation, or guarantee regarding
                      the Sweepstakes or the prize(s), including, but not limited to, their quality,
                      condition, merchantability, or fitness for a particular purpose. Sponsor makes
                      no warranty that the website interface and any content, features, or
                      functionality offered thereon will meet any requirement or will be
                      uninterrupted, timely, secure, or error-free; or there will be no errors in
                      the website interfaces or any content, feature, or functionality offered
                      thereon. Sponsor shall not be responsible for any damage caused to your
                      computer, mobile device, or data, or for any bugs, viruses, Trojan horses, or
                      other destructive code resulting from use of any entry or prize draw
                      interfaces or any content obtained from any third-party services.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>LIMITATIONS OF LIABILITY.</b> All entries become the sole and exclusive
                  property of the Sponsor. The Released Parties are not responsible for: (1) any
                  incorrect or inaccurate information, whether caused by entrants, printing errors
                  or by any of the equipment or programming associated with or utilized in the
                  Sweepstakes; (2) technical failures of any kind, including, but not limited to
                  malfunctions, interruptions, or disconnections in phone lines or network hardware
                  or software; (3) unauthorized human intervention in any part of the entry process
                  or the Sweepstakes; (4) technical or human error which may occur in the
                  administration of the Sweepstakes or the processing of entries; (5) late, lost,
                  undeliverable, damaged or stolen mail; (6) any injury or damage to persons or
                  property which may be caused, directly or indirectly, in whole or in part, from
                  entrant's participation in the Sweepstakes or receipt or use or misuse of any
                  prize; or (7) any maintenance, service charge(s), account activation or monthly
                  fees, repairs, replacement, insurance, or any expense related to ownership of any
                  prize. If for any reason a Participant's entry is confirmed to have been
                  erroneously deleted, lost, or otherwise destroyed or corrupted, entrant's sole
                  remedy is another entry in the Sweepstakes, if it is possible. No more than the
                  stated number of prizes will be awarded. In the event that production, technical,
                  seeding, programming or any other reasons cause more than the stated number of
                  prizes as set forth in these Official Rules and any other additional rules on the
                  Sweepstakes Page to be available and/or claimed, Sponsor reserves the right to
                  award only the stated number of prizes by a random drawing among all legitimate,
                  un-awarded, eligible prize claims.
                </li>
                <li>
                  <p>
                    <b>GOVERNING LAW, ARBITRATION AND DISPUTE RESOLUTION.</b>
                  </p>
                  <p className="mt-2">
                    PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS THE WAY IN WHICH ANY CLAIM OR
                    DISPUTE BETWEEN YOU AND THE SPONSOR IS RESOLVED.
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                      <b>Governing Law.</b> Unless the laws of your jurisdiction require that the
                      laws of that jurisdiction govern, in which case the laws of such jurisdiction
                      shall govern, all claims arising out of the Sweepstakes and all issues and
                      matters concerning the construction, validity, interpretation, and
                      enforceability of these Official Rules and any other additional rules on the
                      Sweepstakes Page, or the rights of Participant(s), shall be governed by and
                      construed in accordance with the laws of the State of Wyoming and the United
                      States of America, without regard to conflict of laws principles. Any and all
                      disputes, claims, and causes of action arising out of, or connected with, the
                      Sweepstakes shall be resolved individually, without resort to any form of
                      class action.
                    </li>
                    <li>
                      <b>Process.</b> Any claim, controversy, or dispute (whether in contract, tort,
                      or otherwise) arising directly or indirectly out of or related to the
                      Sweepstakes shall be resolved exclusively by a final and binding arbitration
                      administered by the American Arbitration Association (the "AAA") and conducted
                      before a sole arbitrator pursuant to the applicable Rules and Procedures
                      established by the AAA. This arbitration agreement is made pursuant to a
                      transaction involving interstate commerce, and shall be governed by the
                      Federal Arbitration Act (the "FAA"), 9 U.S.C. §§ 1-16. The arbitration shall
                      be conducted in the English language. The arbitration shall be held at a
                      location determined by the AAA pursuant to the Rules and Procedures (provided
                      such location is reasonably convenient for Participant), or at such a location
                      as may be mutually agreed by the Participant and Sponsor. The arbitrator's
                      decision shall be controlled by the terms and conditions of these Official
                      Rules, together with any other additional rules on the Sweepstakes Page, and
                      any of the other agreements referenced herein that the Participant may have
                      entered into in connection with the Sweepstakes. The arbitrator shall apply
                      the laws of the State of Wyoming consistent with the FAA and applicable
                      statutes of limitations, and shall honor claims of privilege recognized at
                      law. To the extent permitted by law, Participant agrees that under no
                      circumstances will the Participant be permitted to obtain an award for, and
                      Participant hereby waives all rights to, consequential, incidental, punitive
                      damages, or any other damages, and any and all rights to have damages
                      multiplied or otherwise increased.
                    </li>
                    <li>
                      <b>No Class Action or Consolidated Proceedings.</b> ANY ARBITRATION THAT
                      OCCURS WILL TAKE PLACE ON AN INDIVIDUAL BASIS. CLASS ARBITRATIONS, CLASS
                      ACTION SUITS OR CONSOLIDATED PROCEEDINGS ARE NOT PERMITTED AS A WAY TO RESOLVE
                      ANY CLAIM OR DISPUTE.
                    </li>
                    <li>
                      <b>Scope.</b> This agreement to arbitrate claims and disputes is intended to
                      be broad and includes, without limitation, (i) claims or disputes relating to
                      any aspect of the Sweepstakes, whether based in contract, tort, statute, or
                      any other legal theory, (ii) claims or disputes directly or indirectly arising
                      from conduct or events that occurred prior to the effective date of these
                      Rules (including, without limitation, claims relating to advertising), or
                      after its termination, (iii) claims or disputes subject to class action
                      litigation in which you are not currently a member of a certified class, and
                      (iv) claims or disputes with any agent, employee, successor or assign of you,
                      the Sponsor, the Administrator, or any Released Party (all such claims and
                      disputes are referred to collectively as "Claims"). This agreement to
                      arbitrate does not, however, include Claims pertaining to intellectual
                      property rights.
                    </li>
                    <li>
                      <b>No Preclusive Effect.</b> No award or finding or stipulation of fact by the
                      arbitrator will have any preclusive or collateral estoppel effect in any other
                      arbitration or court, unless it involves the exact same parties.
                    </li>
                    <li>
                      <b>Severability.</b> If any part of this arbitration provision is deemed to be
                      invalid, unenforceable or illegal, then the balance of this arbitration
                      provision shall remain in effect and shall be construed in accordance with its
                      terms as if the invalid, unenforceable or illegal provision were not contained
                      herein.
                    </li>
                    <li>
                      <b>Change of Laws.</b> If, at any time during the Sweepstakes Period or during
                      the winner verification and prize delivery, any change, modification, repeal
                      of any existing law, regulation, or legal determination, or any new laws,
                      legislation, or regulations, become effective that will make any prize
                      illegal, alter the winner verification process, or effect the prize delivery,
                      Sponsor may distribute a cash prize for the wholesale or dealer cost of the
                      prize, as determined by Sponsor.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>PUBLICITY AND PRIVACY.</b> Except where prohibited, participation in the
                  Sweepstakes constitutes winner's consent to Sponsor's use of winner's name,
                  likeness, photograph, voice, opinions and/or hometown and state for promotional
                  purposes in any media, worldwide, without further payment or consideration. Except
                  as just stated, information collected from entrants is subject to Sponsor's
                  Privacy Policy.
                </li>
                <li>
                  <b>WINNERS LIST.</b> The first name, last initial, city and state of the winner(s)
                  in each Sweepstakes will be available on home page of the Site for at least ninety
                  (90) days after the end of the applicable Sweepstakes.
                </li>
              </ol>
              <p className="mt-6">
                © 2024 Sicuro Brands LLC are logos and trademarks of Sicuro Brands LLC All other
                trademarks, service marks, logos, products, or service names are the property of
                their respective owners. All Rights Reserved. This Sweepstakes is in no way
                sponsored, endorsed or administered by Facebook, Inc., Twitter, Inc., Instagram,
                LLC, Google, Inc., or any other third-party not specifically designated by Sponsor.
                Information is being provided to Sponsor in accordance to these Official Rules and
                any other additional rules on the Sweepstakes Page. This promotion is in no way
                sponsored, endorsed or administered by, or associated with, Instagram or Facebook.
              </p>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return <div className="p-6">{getModalContent()}</div>;
};

export default FooterModal;
