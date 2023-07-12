/* Autogenerated file. Do not edit manually. */
/* eslint-disable */
import type {
    BaseContract,
    BigNumber,
    BigNumberish,
    BytesLike,
    CallOverrides,
    ContractTransaction,
    Overrides,
    PopulatedTransaction,
    Signer,
    utils,
} from "ethers";
import type {
    FunctionFragment,
    Result,
    EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
    TypedEventFilter,
    TypedEvent,
    TypedListener,
    OnEvent,
} from "./common";

export declare namespace ParaSwapDebtSwapAdapter {
    export type DebtSwapParamsStruct = {
        debtAsset: string;
        debtRepayAmount: BigNumberish;
        debtRateMode: BigNumberish;
        newDebtAsset: string;
        maxNewDebtAmount: BigNumberish;
        offset: BigNumberish;
        paraswapData: BytesLike;
    };

    export type DebtSwapParamsStructOutput = [
        string,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        string
    ] & {
        debtAsset: string;
        debtRepayAmount: BigNumber;
        debtRateMode: BigNumber;
        newDebtAsset: string;
        maxNewDebtAmount: BigNumber;
        offset: BigNumber;
        paraswapData: string;
    };

    export type CreditDelegationInputStruct = {
        debtToken: string;
        value: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
    };

    export type CreditDelegationInputStructOutput = [
        string,
        BigNumber,
        BigNumber,
        number,
        string,
        string
    ] & {
        debtToken: string;
        value: BigNumber;
        deadline: BigNumber;
        v: number;
        r: string;
        s: string;
    };
}

export interface ParaSwapDebtSwapAdapterInterface extends utils.Interface {
    functions: {
        "swapDebt((address,uint256,uint256,address,uint256,uint256,bytes),(address,uint256,uint256,uint8,bytes32,bytes32))": FunctionFragment;
    };

    getFunction(
        nameOrSignatureOrTopic:
            | "swapDebt"
    ): FunctionFragment;

    encodeFunctionData(
        functionFragment: "swapDebt",
        values: [
            ParaSwapDebtSwapAdapter.DebtSwapParamsStruct,
            ParaSwapDebtSwapAdapter.CreditDelegationInputStruct
        ]
    ): string;

    events: {
        "Swapped(address,address,uint256,uint256)": EventFragment;
    };

    getEvent(nameOrSignatureOrTopic: "Swapped"): EventFragment;
}

export interface SwappedEventObject {
    fromAsset: string;
    toAsset: string;
    fromAmount: BigNumber;
    receivedAmount: BigNumber;
}
export type SwappedEvent = TypedEvent<
    [string, string, BigNumber, BigNumber],
    SwappedEventObject
>;

export type SwappedEventFilter = TypedEventFilter<SwappedEvent>;

export interface ParaSwapDebtSwapAdapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;

    interface: ParaSwapDebtSwapAdapterInterface;

    queryFilter<TEvent extends TypedEvent>(
        event: TypedEventFilter<TEvent>,
        fromBlockOrBlockhash?: string | number | undefined,
        toBlock?: string | number | undefined
    ): Promise<Array<TEvent>>;

    listeners<TEvent extends TypedEvent>(
        eventFilter?: TypedEventFilter<TEvent>
    ): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(
        eventFilter: TypedEventFilter<TEvent>
    ): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;

    functions: {
        swapDebt(
            debtSwapParams: ParaSwapDebtSwapAdapter.DebtSwapParamsStruct,
            creditDelegationPermit: ParaSwapDebtSwapAdapter.CreditDelegationInputStruct,
            overrides?: Overrides & { from?: string }
        ): Promise<ContractTransaction>;
    };

    swapDebt(
        debtSwapParams: ParaSwapDebtSwapAdapter.DebtSwapParamsStruct,
        creditDelegationPermit: ParaSwapDebtSwapAdapter.CreditDelegationInputStruct,
        overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    callStatic: {
        swapDebt(
            debtSwapParams: ParaSwapDebtSwapAdapter.DebtSwapParamsStruct,
            creditDelegationPermit: ParaSwapDebtSwapAdapter.CreditDelegationInputStruct,
            overrides?: CallOverrides
        ): Promise<void>;

    };

    filters: {
        "Swapped(address,address,uint256,uint256)"(
            fromAsset?: string | null,
            toAsset?: string | null,
            fromAmount?: null,
            receivedAmount?: null
        ): SwappedEventFilter;
        Swapped(
            fromAsset?: string | null,
            toAsset?: string | null,
            fromAmount?: null,
            receivedAmount?: null
        ): SwappedEventFilter;
    };

    estimateGas: {
        swapDebt(
            debtSwapParams: ParaSwapDebtSwapAdapter.DebtSwapParamsStruct,
            creditDelegationPermit: ParaSwapDebtSwapAdapter.CreditDelegationInputStruct,
            overrides?: Overrides & { from?: string }
        ): Promise<BigNumber>;
    };

    populateTransaction: {
        swapDebt(
            debtSwapParams: ParaSwapDebtSwapAdapter.DebtSwapParamsStruct,
            creditDelegationPermit: ParaSwapDebtSwapAdapter.CreditDelegationInputStruct,
            overrides?: Overrides & { from?: string }
        ): Promise<PopulatedTransaction>;
    };
}