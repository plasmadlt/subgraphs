import { Address, BigDecimal, Bytes } from "@graphprotocol/graph-ts";
import { Factory } from "../../../../../generated/Factory/Factory";
import {
  FeeSwitch,
  Network,
  RewardIntervalType,
} from "../../../../../src/common/constants";
import { Configurations } from "../../../../../configurations/configurations/interface";
import { PROTOCOL_NAME, PROTOCOL_SLUG } from "../../../src/common/constants";
import { stringToBytesList } from "../../../../../src/common/utils/utils";

export class UniswapV3OptimismConfigurations implements Configurations {
  getNetwork(): string {
    return Network.OPTIMISM;
  }
  getProtocolName(): string {
    return PROTOCOL_NAME;
  }
  getProtocolSlug(): string {
    return PROTOCOL_SLUG;
  }
  getFactoryAddress(): Bytes {
    return Bytes.fromHexString("0x1f98431c8ad98523631ae4a59f267346ea31f984");
  }
  getFactoryContract(): Factory {
    return Factory.bind(
      Address.fromString("0x1f98431c8ad98523631ae4a59f267346ea31f984")
    );
  }
  getFeeOnOff(): string {
    return FeeSwitch.OFF;
  }
  getRewardIntervalType(): string {
    return RewardIntervalType.NONE;
  }
  getReferenceToken(): Bytes {
    return Bytes.fromHexString("0x4200000000000000000000000000000000000006");
  }
  getRewardToken(): Bytes {
    return Bytes.fromHexString("");
  }
  getWhitelistTokens(): Bytes[] {
    return stringToBytesList([
      "0x7f5c764cbc14f9669b88837ca1490cca17c31607", // usdc
      "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58", // tusd
      "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1", // dai
      "0x68f180fcce6836688e9084f035309e29bf0a2095", // wbtc
      "0x9e1028f5f1d5ede59748ffcee5532509976840e0", // perp
      "0x50c5725949a6f0c72e6c4a641f24049a917db0cb", // lyra
      "0x61baadcf22d2565b0f471b291c475db5555e0b76", // aelin
    ]);
  }
  getStableCoins(): Bytes[] {
    return stringToBytesList([
      "0x7f5c764cbc14f9669b88837ca1490cca17c31607", // usdc
      "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58", // tusd
      "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1", // dai
    ]);
  }
  getStableOraclePools(): Bytes[] {
    return stringToBytesList([
      "0x03af20bdaaffb4cc0a521796a223f7d85e2aac31", // weth/dai
      "0xb589969d38ce76d3d7aa319de7133bc9755fd840", // weth/usdc - 0.30
      "0x85149247691df622eaf1a8bd0cafd40bc45154a9", // weth/usdc - 0.05
    ]);
  }
  getUntrackedPairs(): Bytes[] {
    return stringToBytesList([]);
  }
  getUntrackedTokens(): Bytes[] {
    return stringToBytesList([
      "0x296f55f8fb28e498b858d0bcda06d955b2cb3f97", // stargatetoken
      "0x2e3d870790dc77a83dd1d18184acc7439a53f475", // frax
    ]);
  }
  getMinimumLiquidityThreshold(): BigDecimal {
    return BigDecimal.fromString("100000");
  }
}
