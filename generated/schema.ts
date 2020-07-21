// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save User entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save User entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("User", id.toString(), this);
  }

  static load(id: string): User | null {
    return store.get("User", id) as User | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get signUpDate(): BigInt {
    let value = this.get("signUpDate");
    return value.toBigInt();
  }

  set signUpDate(value: BigInt) {
    this.set("signUpDate", Value.fromBigInt(value));
  }

  get executor(): Bytes | null {
    let value = this.get("executor");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set executor(value: Bytes | null) {
    if (value === null) {
      this.unset("executor");
    } else {
      this.set("executor", Value.fromBytes(value as Bytes));
    }
  }
}

export class TaskReceiptWrapper extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TaskReceiptWrapper entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TaskReceiptWrapper entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TaskReceiptWrapper", id.toString(), this);
  }

  static load(id: string): TaskReceiptWrapper | null {
    return store.get("TaskReceiptWrapper", id) as TaskReceiptWrapper | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    return value.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get taskReceipt(): string {
    let value = this.get("taskReceipt");
    return value.toString();
  }

  set taskReceipt(value: string) {
    this.set("taskReceipt", Value.fromString(value));
  }

  get submissionHash(): Bytes {
    let value = this.get("submissionHash");
    return value.toBytes();
  }

  set submissionHash(value: Bytes) {
    this.set("submissionHash", Value.fromBytes(value));
  }

  get status(): string {
    let value = this.get("status");
    return value.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }

  get submissionDate(): BigInt {
    let value = this.get("submissionDate");
    return value.toBigInt();
  }

  set submissionDate(value: BigInt) {
    this.set("submissionDate", Value.fromBigInt(value));
  }

  get selectedExecutor(): Bytes {
    let value = this.get("selectedExecutor");
    return value.toBytes();
  }

  set selectedExecutor(value: Bytes) {
    this.set("selectedExecutor", Value.fromBytes(value));
  }

  get executionDate(): BigInt | null {
    let value = this.get("executionDate");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set executionDate(value: BigInt | null) {
    if (value === null) {
      this.unset("executionDate");
    } else {
      this.set("executionDate", Value.fromBigInt(value as BigInt));
    }
  }

  get executionHash(): Bytes | null {
    let value = this.get("executionHash");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set executionHash(value: Bytes | null) {
    if (value === null) {
      this.unset("executionHash");
    } else {
      this.set("executionHash", Value.fromBytes(value as Bytes));
    }
  }

  get selfProvided(): boolean {
    let value = this.get("selfProvided");
    return value.toBoolean();
  }

  set selfProvided(value: boolean) {
    this.set("selfProvided", Value.fromBoolean(value));
  }
}

export class TaskReceipt extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TaskReceipt entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TaskReceipt entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TaskReceipt", id.toString(), this);
  }

  static load(id: string): TaskReceipt | null {
    return store.get("TaskReceipt", id) as TaskReceipt | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get userProxy(): Bytes {
    let value = this.get("userProxy");
    return value.toBytes();
  }

  set userProxy(value: Bytes) {
    this.set("userProxy", Value.fromBytes(value));
  }

  get provider(): string {
    let value = this.get("provider");
    return value.toString();
  }

  set provider(value: string) {
    this.set("provider", Value.fromString(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get tasks(): Array<string> | null {
    let value = this.get("tasks");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set tasks(value: Array<string> | null) {
    if (value === null) {
      this.unset("tasks");
    } else {
      this.set("tasks", Value.fromStringArray(value as Array<string>));
    }
  }

  get expiryDate(): BigInt {
    let value = this.get("expiryDate");
    return value.toBigInt();
  }

  set expiryDate(value: BigInt) {
    this.set("expiryDate", Value.fromBigInt(value));
  }

  get cycleId(): BigInt {
    let value = this.get("cycleId");
    return value.toBigInt();
  }

  set cycleId(value: BigInt) {
    this.set("cycleId", Value.fromBigInt(value));
  }

  get submissionsLeft(): BigInt {
    let value = this.get("submissionsLeft");
    return value.toBigInt();
  }

  set submissionsLeft(value: BigInt) {
    this.set("submissionsLeft", Value.fromBigInt(value));
  }
}

export class TaskCycle extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TaskCycle entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TaskCycle entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TaskCycle", id.toString(), this);
  }

  static load(id: string): TaskCycle | null {
    return store.get("TaskCycle", id) as TaskCycle | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tasksReceipts(): Array<string> | null {
    let value = this.get("tasksReceipts");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set tasksReceipts(value: Array<string> | null) {
    if (value === null) {
      this.unset("tasksReceipts");
    } else {
      this.set("tasksReceipts", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class Task extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Task entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Task entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Task", id.toString(), this);
  }

  static load(id: string): Task | null {
    return store.get("Task", id) as Task | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get conditions(): Array<string> | null {
    let value = this.get("conditions");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set conditions(value: Array<string> | null) {
    if (value === null) {
      this.unset("conditions");
    } else {
      this.set("conditions", Value.fromStringArray(value as Array<string>));
    }
  }

  get actions(): Array<string> | null {
    let value = this.get("actions");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set actions(value: Array<string> | null) {
    if (value === null) {
      this.unset("actions");
    } else {
      this.set("actions", Value.fromStringArray(value as Array<string>));
    }
  }

  get selfProviderGasLimit(): BigInt {
    let value = this.get("selfProviderGasLimit");
    return value.toBigInt();
  }

  set selfProviderGasLimit(value: BigInt) {
    this.set("selfProviderGasLimit", Value.fromBigInt(value));
  }

  get selfProviderGasPriceCeil(): BigInt {
    let value = this.get("selfProviderGasPriceCeil");
    return value.toBigInt();
  }

  set selfProviderGasPriceCeil(value: BigInt) {
    this.set("selfProviderGasPriceCeil", Value.fromBigInt(value));
  }
}

export class Provider extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Provider entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Provider entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Provider", id.toString(), this);
  }

  static load(id: string): Provider | null {
    return store.get("Provider", id) as Provider | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get addr(): Bytes {
    let value = this.get("addr");
    return value.toBytes();
  }

  set addr(value: Bytes) {
    this.set("addr", Value.fromBytes(value));
  }

  get module(): Bytes {
    let value = this.get("module");
    return value.toBytes();
  }

  set module(value: Bytes) {
    this.set("module", Value.fromBytes(value));
  }

  get taskCount(): BigInt {
    let value = this.get("taskCount");
    return value.toBigInt();
  }

  set taskCount(value: BigInt) {
    this.set("taskCount", Value.fromBigInt(value));
  }
}

export class Condition extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Condition entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Condition entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Condition", id.toString(), this);
  }

  static load(id: string): Condition | null {
    return store.get("Condition", id) as Condition | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get inst(): Bytes {
    let value = this.get("inst");
    return value.toBytes();
  }

  set inst(value: Bytes) {
    this.set("inst", Value.fromBytes(value));
  }

  get data(): Bytes {
    let value = this.get("data");
    return value.toBytes();
  }

  set data(value: Bytes) {
    this.set("data", Value.fromBytes(value));
  }
}

export class Action extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Action entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Action entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Action", id.toString(), this);
  }

  static load(id: string): Action | null {
    return store.get("Action", id) as Action | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get addr(): Bytes {
    let value = this.get("addr");
    return value.toBytes();
  }

  set addr(value: Bytes) {
    this.set("addr", Value.fromBytes(value));
  }

  get data(): Bytes {
    let value = this.get("data");
    return value.toBytes();
  }

  set data(value: Bytes) {
    this.set("data", Value.fromBytes(value));
  }

  get operation(): string {
    let value = this.get("operation");
    return value.toString();
  }

  set operation(value: string) {
    this.set("operation", Value.fromString(value));
  }

  get dataFlow(): string {
    let value = this.get("dataFlow");
    return value.toString();
  }

  set dataFlow(value: string) {
    this.set("dataFlow", Value.fromString(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get termsOkCheck(): boolean {
    let value = this.get("termsOkCheck");
    return value.toBoolean();
  }

  set termsOkCheck(value: boolean) {
    this.set("termsOkCheck", Value.fromBoolean(value));
  }
}

export class Executor extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Executor entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Executor entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Executor", id.toString(), this);
  }

  static load(id: string): Executor | null {
    return store.get("Executor", id) as Executor | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }
}