import { beforeEach } from "node:test";
import { describe, expect, test } from "vitest";
import { InMemoryUserRepo } from "../repository/in-memory/in-memory-user-repo";
import { User } from "./user";

describe("user use-case tests", () => {
    test("it should be able to create a user", async () => {
        let userRepoInMemory = new InMemoryUserRepo()
        let sut = new User(userRepoInMemory)

        const user = await sut.save({
            name:"john marston",
            password: "asdasdasdas"
        })

        expect(user.id).toEqual(expect.any(Number))
    })
})