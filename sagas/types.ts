export type AuthCodeIssuanceResponse = {
    issueToken: string,
    remainMilisecond: number,
}

export type AuthCodeVerificationResponse = {
    confirmToken: string,
}

export type LogInResponse = {
    accessToken: string,
}

export type GetUserInfoResponse = {
    name: string,
    email: string,
    profileImage: string,
    lastConnectedAt: Date,
}

export type LogOutResponse =  {
    lastConnectedAt: Date,
}