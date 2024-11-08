import React, { useState } from "react";

import { footerLinks, footerNav } from "../constants";
import { appleImg, chevronDownIcon, rightBreadcrumbsIcon } from "../utils";

const Footer = () => {
  const [current, setCurrent] = useState();
  return (
    <footer className="bg-zinc">
      <div className="screen-max-width px-4">
        <div className="py-5">
          <ul className="mb-2">
            <li className="text-white-200 text-xs">
              <span>*</span>Trade-in values will vary based on the condition,
              year, and configuration of your eligible trade‑in device. Not all
              devices are eligible for credit. You must be at least 18 years old
              to be eligible to trade in for credit or for an Apple Gift Card.
              Trade‑in value may be applied toward qualifying new device
              purchase, or added to an Apple Gift Card. Actual value awarded is
              based on receipt of a qualifying device matching the description
              provided when estimate was made. Sales tax may be assessed on full
              value of a new device purchase. In‑store trade‑in requires
              presentation of a valid photo ID (local law may require saving
              this information). Offer may not be available in all stores, and
              may vary between in‑store and online trade‑in. Some stores may
              have additional requirements. Apple or its trade‑in partners
              reserve the right to refuse or limit quantity of any trade‑in
              transaction for any reason. More details are available from
              Apple’s trade‑in partner for trade‑in and recycling of eligible
              devices. Restrictions and limitations may apply.
            </li>
          </ul>
          <ol className="px-5">
            <li className="text-white-200 text-xs list-decimal pb-2">
              Available to qualified customers and requires 24‑month installment
              loan when you select Citizens One or Apple Card Monthly
              Installments (ACMI) as payment type at checkout at Apple. You’ll
              need to select AT&T, Boost Mobile, T‑Mobile, or Verizon as your
              carrier when you check out. An iPhone purchased with ACMI is
              always unlocked, so you can switch carriers at any time. Subject
              to credit approval and credit limit. Taxes and shipping are not
              included in ACMI and are subject to your card’s variable APR.
              Additional Apple Card Monthly Installments terms are in the{" "}
              <a href="" className="text-white-100 underline">
                Apple Card Customer Agreement
              </a>
              . Additional iPhone Payments terms are{" "}
              <a href="" className="text-white-100 underline">
                here
              </a>
              . ACMI is not available for purchases made online at special
              storefronts. The last month’s payment for each product will be the
              product’s purchase price, less all other payments at the monthly
              payment amount. ACMI financing is subject to change at any time
              for any reason, including but not limited to, installment term
              lengths and eligible products. See{" "}
              <a href="" className="text-white-100 underline">
                support.apple.com/kb/HT211204
              </a>
              for information about upcoming changes to ACMI financing.
            </li>
            <li className="text-white-200 text-xs list-decimal pb-2">
              Apple Intelligence will be available in beta on all iPhone 16
              models, iPhone 15 Pro, iPhone 15 Pro Max, and iPad and Mac with M1
              and later, with Siri and device language set to U.S. English, as
              part of an iOS 18, iPadOS 18, and macOS Sequoia update this fall.
              English (Australia, Canada, New Zealand, South Africa, UK)
              language support available this December. Some features and
              support for additional languages, like Chinese, English (India,
              Singapore), French, German, Italian, Japanese, Korean, Portuguese,
              Spanish, Vietnamese, and others, will be coming over the course of
              the next year.
            </li>
            <li className="text-white-200 text-xs list-decimal pb-2">
              Display size: The display has rounded corners that follow a
              beautiful curved design, and these corners are within a standard
              rectangle. When measured as a standard rectangular shape, the
              screen is 6.27 inches (iPhone 16 Pro) or 6.86 inches (iPhone 16
              Pro Max) diagonally. Actual viewable area is less.
            </li>
            <li className="text-white-200 text-xs list-decimal pb-2">
              iPhone 16 Pro and iPhone 16 Pro Max are splash, water, and dust
              resistant and were tested under controlled laboratory conditions
              with a rating of IP68 under IEC standard 60529 (maximum depth of 6
              meters up to 30 minutes). Splash, water, and dust resistance are
              not permanent conditions. Resistance might decrease as a result of
              normal wear. Do not attempt to charge a wet iPhone; refer to the
              user guide for cleaning and drying instructions. Liquid damage not
              covered under warranty.
            </li>
            <li className="text-white-200 text-xs list-decimal pb-2">
              Battery life increase based on the video playback hours of iPhone
              16 Pro Max compared to iPhone 15 Pro Max.
            </li>
            <li className="text-white-200 text-xs list-decimal pb-2">
              Accessories sold separately.
            </li>
            <li className="text-white-200 text-xs list-decimal pb-2">
              Testing conducted by Apple in August 2024 using preproduction
              iPhone 16 Pro and iPhone 16 Pro Max units and software, USB‑C
              Charge Cable with Apple USB-C Power Adapter (20W Model A2305), and
              Apple MagSafe Chargers (1-meter Model A2580 and 2-meter Model
              A3250) with Apple USB-C Power Adapter (30W Model A2164).
              Fast-charge testing conducted with drained iPhone units. Times
              measured from the appearance of the Apple logo as the unit started
              up. Charge time varies with settings and environmental factors;
              actual results will vary.
            </li>
            <li className="text-white-200 text-xs list-decimal pb-2">
              All battery claims depend on network configuration and many other
              factors; actual results will vary. Battery has limited recharge
              cycles and may eventually need to be replaced. Battery life and
              charge cycles vary by use and settings. See{" "}
              <a href="" className="text-white-100 underline">
                apple.com/batteries
              </a>
              and{" "}
              <a href="" className="text-white-100 underline">
                apple.com/iphone/battery.html
              </a>{" "}
              for more information.
            </li>
            <li className="text-white-200 text-xs list-decimal pb-2">
              Roadside Assistance, Emergency SOS, and Messages via satellite are
              included for free for two years with the activation of any iPhone
              14 or later model. Connection and response times vary based on
              location, site conditions, and other factors. Messages via
              satellite requires a carrier plan. SMS messaging via satellite is
              available on supported carriers. SMS message rates may apply. See
              <a href="" className="text-white-100 underline">
                support.apple.com/kb/HT213885
              </a>{" "}
              for more information.
            </li>
            <li className="text-white-200 text-xs list-decimal pb-2">
              Fees are determined by the roadside assistance provider, and can
              vary based on your location and the type of assistance provided.
              See{" "}
              <a href="" className="text-white-100 underline">
                support.apple.com/105098
              </a>{" "}
              for more information.
            </li>
            <li className="text-white-200 text-xs list-decimal pb-2">
              Service is included for free for two years with the activation of
              any iPhone 16 model. Connection and response times vary based on
              location, site conditions, and other factors. See
              <a href="" className="text-white-100 underline">
                support.apple.com/kb/HT213885
              </a>{" "}
              for more information.
            </li>
            <li className="text-white-200 text-xs list-decimal pb-2">
              iPhone 16 and iPhone 16 Pro can detect a severe car crash and call
              for help. Requires a cellular connection or Wi-Fi calling.
            </li>
            <li className="text-white-200 text-xs list-decimal pb-2">
              On a mass balance allocation.
            </li>
            <li className="text-white-200 text-xs list-decimal pb-2">
              Breakdown of U.S. retail packaging by weight. Adhesives, inks, and
              coatings are excluded from our calculations of plastic content and
              packaging weight.
            </li>
            <li className="text-white-200 text-xs list-decimal pb-2">
              This increase in boxes we can fit onto a pallet excludes pallets
              shipped to the following locations: U.S., Puerto Rico, U.S. Virgin
              Islands, Guam, and Canada.
            </li>
            <li className="text-white-200 text-xs list-decimal pb-2">
              Requires an iPhone and Apple Watch with second-generation Ultra
              Wideband chip. Ultra Wideband availability varies by region.
            </li>
            <li className="text-white-200 text-xs list-decimal pb-2">
              Apple Card Monthly Installments (ACMI) is a 0% APR payment option
              that is only available if you select it at checkout in the U.S.
              for eligible products purchased at Apple Store locations,
              <a href="" className="text-white-100 underline">
                apple.com
              </a>
              , the Apple Store app, or by calling 1‑800‑MY‑APPLE, and is
              subject to credit approval and credit limit. See
              <a href="" className="text-white-100 underline">
                support.apple.com/kb/HT211204
              </a>{" "}
              for more information about eligible products. APR ranges may vary
              based on when you accepted an Apple Card. Cardholders who accept
              an Apple Card on and/or after October 1, 2024: Variable APRs for
              Apple Card, other than ACMI, range from 18.74% to 28.99% based on
              creditworthiness. Rates as of October 1, 2024. Existing
              cardholders: See your Customer Agreement for applicable rates and
              fee. If you buy an ACMI‑eligible product by choosing to pay in
              full with Apple Card (instead of using ACMI), that purchase is
              subject to the Apple Card variable APR, not 0% APR. Taxes and
              shipping on ACMI purchases are subject to the variable APR, not 0%
              APR. When you buy an iPhone with ACMI, you’ll need to select AT&T,
              Boost Mobile, T‑Mobile, or Verizon as your carrier when you check
              out. An iPhone purchased with ACMI is always unlocked, so you can
              switch carriers at any time. ACMI is not available for purchases
              made online at the following special stores: Apple Employee
              Purchase Plan; participating corporate Employee Purchase Programs;
              Apple at Work for small businesses; Government and Veterans and
              Military Purchase Programs; or on refurbished devices. The last
              month’s payment for each product will be the product’s purchase
              price, less all other payments at the monthly payment amount. ACMI
              financing is subject to change at any time for any reason,
              including but not limited to installment term lengths and eligible
              products. See{" "}
              <a href="" className="text-white-100 underline">
                support.apple.com/kb/HT211204
              </a>{" "}
              for information about upcoming changes to ACMI financing. See the
              <a href="" className="text-white-100 underline">
                Apple Card Customer Agreement
              </a>{" "}
              for more information about ACMI financing.{" "}
              <p className="mt-2">
                To access and use all Apple Card features and products available
                only to Apple Card users, you must add Apple Card to Wallet on
                an iPhone or iPad that supports and has the latest version of
                iOS or iPadOS. Apple Card is subject to credit approval,
                available only for qualifying applicants in the United States,
                and issued by Goldman Sachs Bank USA, Salt Lake City Branch.
              </p>{" "}
              <p className="mt-2">
                If you reside in the U.S. territories, please call Goldman Sachs
                at 877‑255‑5923 with questions about Apple Card.
              </p>
            </li>
            <li className="text-white-200 text-xs list-decimal pb-2">
              <p className="mb-2">
                <span href="" className="text-white-100">
                  AT&T iPhone 16 Special Deal:
                </span>{" "}
                Monthly price (if shown) reflects net monthly payment, after
                application of AT&T trade-in credit applied over 36 months with
                purchase of an iPhone 16 Pro, iPhone 16 Pro Max, iPhone 16, or
                iPhone 16 Plus and trade-in of eligible smartphone. Receive
                credit with purchase of an iPhone 16 Pro or iPhone 16 Pro Max of
                either $1000, $700, or $350 (based upon the model and condition
                of your trade-in smartphone). Receive credit with purchase of an
                iPhone 16 or iPhone 16 Plus of either $700 or $350 (based upon
                the model and condition of your trade-in smartphone). Max bill
                credits will not exceed the cost of the device. Requires upgrade
                of an existing line or activation of a new line and purchase of
                a new iPhone 16 Pro, iPhone 16 Pro Max, iPhone 16, or iPhone 16
                Plus on qualifying 36 month 0% APR installment plan, subject to
                carrier credit qualification. Customers purchasing this offer
                through Apple cannot add the Next Up Anytime option. $0 down for
                well qualified customers only, or down payment may be required
                and depends on a variety of factors. Tax on full retail price
                due at sale. Requires activation on eligible AT&T unlimited
                plan. AT&T may temporarily slow data speeds if the network is
                busy. If you cancel eligible wireless service, credits will stop
                and you will owe the remaining device balance.
                Activation/Upgrade Fee: $35. Trade in device may not be on
                existing installment plan. Bill credits are applied as a monthly
                credit over the 36 month installment plan. Credits start within
                3 bills. Will receive catchup credits once credits start.
                Wireless line must be on an installment agreement, active, and
                in good standing for 30 days to qualify. Installment agreement
                starts when device is shipped. To get all credits, device must
                remain on agreement for entire term and you must keep eligible
                service on device for entire installment term. Limited time
                offer; subject to change. Limits: one trade-in per qualifying
                purchase and one credit per line. May not be combinable with
                other offers, discounts, or credits. Purchase, financing, other
                limits, and restrictions apply. Price for iPhone 16 and iPhone
                16 Plus includes $30 AT&T connectivity discount. Activation
                required.
              </p>
              <p className="mb-2">
                <span href="" className="text-white-100">
                  Boost Mobile iPhone 16 Special Deal:
                </span>{" "}
                Buy an iPhone 16 Pro, iPhone 16 Pro Max, iPhone 16, or iPhone 16
                Plus and get $1000 in bill credits (not to exceed the cost of
                the iPhone) applied over 36 months. No trade-in required. If you
                are trading in a device with this deal, trade-in value will be
                applied as additional bill credits over 36 months. Monthly price
                (if shown) reflects net monthly payment, after application of
                $1000 in bill credit (not to exceed the cost of the iPhone
                purchased) and trade-in credit (if applicable) applied over 36
                months respectively. Requires activation of a new line, Boost
                Mobile Infinite Access plan and purchase on qualifying 36-month
                0% APR installment plan, subject to carrier credit
                qualification. After making 12 installment payments, you may
                upgrade to a new iPhone and get up to $1000 in bill credits (not
                to exceed the cost of the iPhone) applied over 36 months for the
                new iPhone on the Infinite Access plan and purchase on new
                qualifying 36-month 0% APR installment plan, subject to carrier
                credit qualification. Tax on full retail price due at sale. If
                you cancel eligible wireless service, credits will stop and you
                will owe the remaining device balance. Bill credits are applied
                as a monthly credit over the 36-month installment plan. Trade-in
                credits start within 3 bills. Installment agreement starts when
                device is shipped. To get all credits, device must remain on
                agreement for entire term and you must keep eligible service on
                device for entire installment term. Limited-time offer; subject
                to change. Limits: one credit per line. May not be combined with
                other offers, discounts, or credits. Purchase, financing, other
                limits, and restrictions apply. Price for iPhone 16 and iPhone
                16 Plus includes $30 Boost Mobile connectivity discount.
                Activation required.
              </p>
              <p className="mb-2">
                <span href="" className="text-white-100">
                  T‑Mobile iPhone 16 Special Deal:
                </span>{" "}
                Monthly price (if shown) reflects net monthly payment, after
                application of T-Mobile trade-in credit applied over 24 months
                with purchase of an iPhone 16 Pro, iPhone 16 Pro Max, iPhone 16,
                or iPhone 16 Plus and trade-in of eligible smartphone. Receive
                credit with purchase of an iPhone 16 Pro, iPhone 16 Pro Max,
                iPhone 16, or iPhone 16 Plus of $1000 or $500 for customers on a
                Go5G Next plan (based upon the model and condition of your
                trade-in smartphone); or $800 or $400 for customers on a Go5G
                Plus plan (based upon the model and condition of your trade-in
                smartphone). Offer excludes customers on Go5G Next First
                Responder, Go5G Plus First Responder, Go5G Next Military, Go5G
                Plus Military, Go5G Next 55, and Go5G Plus 55 plans. Max bill
                credits will not exceed the cost of the device. Credit comprised
                of (i) Apple instant trade-in credit at checkout and (ii)
                T-Mobile monthly bill credits applied over 24 months. Allow 2
                bill cycles from valid submission and validation of trade-in.
                Tax on pre-credit price due at sale. Limited-time offer; subject
                to change. Qualifying credit, data plan, and trade-in in good
                condition required. Max 4 promotional offers on any iPhone per
                account. May not be combinable with some offers or discounts.
                Price for iPhone 16 and iPhone 16 Plus includes $30 T-Mobile
                connectivity discount. Activation required.{" "}
                <span href="" className="text-white-100">
                  Contact T-Mobile before cancelling service to continue
                  remaining bill credits on current device, or credits stop &
                  balance on required finance agreement is due.
                </span>
              </p>
              <p className="mb-2">
                <span href="" className="text-white-100">
                  Verizon iPhone 16 Special Deal:
                </span>{" "}
                Monthly price (if shown) reflects net monthly payment, after
                application of Verizon trade-in credit applied over 36 months
                with purchase of an iPhone 16 Pro, iPhone 16 Pro Max, iPhone 16,
                or iPhone 16 Plus. Customers on an Unlimited Ultimate plan
                receive: $1000 credit (based upon the model and condition of
                your trade-in smartphone) with purchase of an iPhone 16 Pro or
                iPhone 16 Pro Max; $930 credit (based upon the model and
                condition of your trade-in smartphone) with purchase of an
                iPhone 16 Plus; or $830 credit (based upon the model and
                condition of your trade-in smartphone) with purchase of an
                iPhone 16. Customers on an Unlimited Plus plan receive $730
                credit (based upon the model and condition of your trade-in
                smartphone) with purchase of an iPhone 16 Pro, iPhone 16 Pro
                Max, iPhone 16, or iPhone 16 Plus. Credit comprised of (i) Apple
                instant trade-in credit at checkout and (ii) Verizon monthly
                bill credits applied over 36 months. Customer must remain in the
                Verizon Device Payment Program for 36 months to receive the full
                benefit of the Verizon bill credits. Bill credits may take 1-2
                bill cycles to appear. If it takes two cycles for bill credits
                to appear, you'll see the credit for the first cycle on your
                second bill in addition to that month's credit. Requires
                purchase and activation of a new iPhone 16 Pro, iPhone 16 Pro
                Max, iPhone 16, or iPhone 16 Plus with the Verizon Device
                Payment Program at 0% APR for 36 months, subject to carrier
                credit qualification, and iPhone availability and limits. Taxes
                and shipping not included in monthly price. Sales tax may be
                assessed on full value of new iPhone. Requires eligible
                unlimited service plan. Requires trade-in of eligible device in
                eligible condition. Must be at least 18 to trade-in. Apple or
                its trade-in partners reserve the right to refuse or limit any
                trade-in transaction for any reason. In-store trade-in requires
                presentation of a valid, government-issued photo ID (local law
                may require saving this information). In-store promotion
                availability subject to local law; speak to a Specialist to
                learn more. Limited-time offer; subject to change. Additional
                terms from Apple, Verizon, and Apple's trade-in partners may
                apply. Price for iPhone 16 and iPhone 16 Plus includes $30
                Verizon connectivity discount. Activation required.
              </p>
            </li>
            <li className="text-white-200 text-xs list-decimal pb-2">
              Battery life claim refers to larger models. All battery claims
              depend on network configuration and many other factors; actual
              results will vary. Battery has limited recharge cycles and may
              eventually need to be replaced. Battery life and charge cycles
              vary by use and settings. See{" "}
              <a href="" className="text-white-100 underline">
                apple.com/batteries
              </a>{" "}
              and{" "}
              <a href="" className="text-white-100 underline">
                apple.com/iphone/battery.html
              </a>{" "}
              for more information.
            </li>
          </ol>
          <ul>
            <li className="text-white-200 text-xs mb-2">
              DEATH STRANDING DIRECTOR'S CUT © 2024 Sony Interactive
              Entertainment Inc. / KOJIMA PRODUCTIONS Co., Ltd. / HIDEO KOJIMA.
              Published by 505 Games.
            </li>
            <li className="text-white-200 text-xs">
              <p className="mb-2">
                Features are subject to change. Some features, applications, and
                services may not be available in all regions or all languages.
              </p>
              <p>
                Some features require specific hardware and software. For more
                information, see{" "}
                <a href="" className="text-white-100 underline">
                  Feature Availability.
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="bg-white-300 h-[1px] w-full" />
        <div className="py-5">
          <ul className="flex items-center gap-2">
            <li className="flex items-center gap-2">
              <img src={appleImg} alt="" />
              <img src={rightBreadcrumbsIcon} alt="" width={7} height={7} />
            </li>
            <li className="flex items-center gap-2">
              <a href="" className="text-xs text-white-100">
                iPhone
              </a>
              <img src={rightBreadcrumbsIcon} alt="" width={7} height={7} />
            </li>
            <li>
              <a href="" className="text-xs text-white-100">
                iPhone 16 Pro
              </a>
            </li>
          </ul>

          <div className="mt-5 flex lg:flex-row flex-col">
            {footerNav.map((list, index) => (
              <div key={index} className="flex-1 flex lg:gap-6 flex-col">
                {list.items.map((item, index) => (
                  <div
                    key={index}
                    className="border-b-[0.5px] border-white-300 lg:border-none"
                  >
                    <div
                      className="flex items-center justify-between"
                      onClick={() => {
                        current !== item.header
                          ? setCurrent(item.header)
                          : setCurrent("");
                      }}
                    >
                      <h3 className="w-full text-xs text-white-100 font-semibold py-3 lg:py-2">
                        {item.header}
                      </h3>
                      <img
                        src={chevronDownIcon}
                        alt=""
                        width={14}
                        height={14}
                        className={`lg:hidden transition-all duration-500 ${
                          current === item.header
                            ? "[transform:rotateX(180deg)]"
                            : "0"
                        }`}
                      />
                    </div>

                    <ul
                      className={`lg:block animate-[fadeAnimation_500ms_ease-in-out] ${
                        item.header === current ? "block" : "hidden"
                      }`}
                    >
                      {item.subItems.map((subItem, index) => (
                        <li key={index} className="py-2 lg:py-1">
                          <a
                            href=""
                            className="block w-full text-xs text-white-100"
                          >
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="text-white-200 text-xs mt-5">
            More ways to shop:{" "}
            <span className="underline text-blue"> Find an Apple Store </span>{" "}
            or <span className="underline text-blue">other retailer </span> near
            you. Or call 1-800-MY-APPLE.
          </p>
        </div>
        <div className="bg-white-300 h-[1px] w-full" />
        <div className="flex lg:flex-row flex-col lg:items-center justify-between py-5 gap-5">
          <div className="flex gap-5 flex-col lg:flex-row">
            <p className=" text-white-200 text-xs">
              Copyright © 2024 Apple Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap">
              {footerLinks.map((link, i) => (
                <p key={i} className=" text-white-100 text-xs">
                  {link}{" "}
                  {i !== footerLinks.length - 1 && (
                    <span className="mx-2"> | </span>
                  )}
                </p>
              ))}
            </div>
          </div>
          <p className="text-white-100 text-xs">United States</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
