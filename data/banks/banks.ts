export interface BankDetail{
    bank: string,
    accountNumber : string,
    balance: number,
   
}

export interface Wallet{
    wallet: string,
    accountNumber : string,
    balance: number,
}

export const pendingbankData : BankDetail[] = [];
export const pendingWalletData : BankDetail[] = [];

export const bankData: BankDetail[] = [];
export const walletData : Wallet[] = [];
