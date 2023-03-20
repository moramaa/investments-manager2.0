import { ModalForm } from '@ant-design/pro-components';
import { ProFormInstance, ProFormText, ProFormMoney, ProFormSwitch, ProFormDigit, ProFormFieldSet, ProFormDependency, ProForm, ProFormSelect } from '@ant-design/pro-form';
import { Button, message } from 'antd/lib';
import React, { useRef, useState } from 'react'


type Props = {
    showDetails?:boolean
}

    
const InvestForm = (props: Props) => {

    const details = () => {
        return (
            <ProForm.Group  >
                <ProFormText
                    width="sm"
                    name="investmentID"
                    label="שם ההשקעה"
                    placeholder="בחר שם להשקעה שלך "
                />
                <ProFormText
                    width="sm"
                    name="investmentProduced"
                    label="הפיק ההשקעה "
                    placeholder="באיזה מסלול מושקעים הכספים  "
                />
                <ProFormText
                    width="sm"
                    name="insuranceCompany"
                    label="חברת ביטוח "
                    placeholder="שם חברת הביטוח  "
                />
            </ProForm.Group>
        )
        }

        return (

            <>
         
            {props.showDetails ? details() : null}

         <ProForm.Group>
                <ProFormMoney
                    label="צבירה התחלתית"
                    tooltip="?כמה צברתם עד היום"
                    name="initialInvestment"
                    initialValue={0}
                    min={0}
                    customSymbol="₪"
                    width="sm" />
                <ProFormMoney
                    label="הפקדה חודשתי"
                    tooltip="?כמה מפקדים בכל חודש?"
                    name="monthlyDeposit"
                    initialValue={0}
                    min={0}
                    customSymbol="₪"
                    width="sm" />
            </ProForm.Group><ProForm.Group>
                    <ProFormDigit placeholder="מספרים שנים" width="xs" label="מספר שנים" name="yearsOfInvestment" min={0} fieldProps={{ precision: 0 }}></ProFormDigit>
                    <ProFormDigit placeholder="מספרים שנים" width="xs" label="ריבית שנתית " name="annualInterestRate" min={0} fieldProps={{ precision: 2 }}></ProFormDigit>
                </ProForm.Group><ProForm.Group>
                    <ProFormDigit placeholder="מספרים שנים" width="xs" label="דמי ניהול מחיסכון/מצבירה" name="annualManagementFees" min={0} max={6} fieldProps={{ precision: 2 }}></ProFormDigit>
                    <ProFormDigit placeholder="מספרים שנים" width="xs" label="דמי ניהול מהפקדה" name="monthlyManagementFees" min={0} max={6} fieldProps={{ precision: 2 }}></ProFormDigit>
                </ProForm.Group>
                <ProFormDependency name={['initialInvestment', 'monthlyDeposit', 'yearsOfInvestment', 'annualInterestRate', 'annualManagementFees', 'monthlyManagementFees']}>
                    {({ initialInvestment, monthlyDeposit, yearsOfInvestment, annualInterestRate, annualManagementFees, monthlyManagementFees }) => {
                        const monthlyInterestRate = annualInterestRate / 12 / 100;
                        const monthlyManagementFeeRate = monthlyManagementFees / 100;
                        const annualManagementFeeRate = annualManagementFees / 100;

                        let balance = initialInvestment;
                        let totalManagementFees = 0;

                        for (let i = 0; i < yearsOfInvestment * 12; i++) {
                            // Add monthly deposit
                            balance += monthlyDeposit;

                            // Apply monthly interest rate
                            const monthlyInterest = balance * monthlyInterestRate;
                            balance += monthlyInterest;

                            // Apply monthly management fee on deposit
                            const monthlyDepositManagementFee = monthlyDeposit * monthlyManagementFeeRate;
                            balance -= monthlyDepositManagementFee;

                            // Track total management fees
                            totalManagementFees += monthlyDepositManagementFee;

                            // Apply annual management fee on balance
                            if (i % 12 === 0) {
                                const annualManagementFee = balance * annualManagementFeeRate;
                                balance -= annualManagementFee;

                                // Track total management fees
                                totalManagementFees += annualManagementFee;
                            }
                        }

                        return <div>{balance}
                        </div>;
                    } }
                </ProFormDependency></>
                
            )
}

export default InvestForm