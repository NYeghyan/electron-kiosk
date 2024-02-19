export interface IPCInterface {
    osInfo: {
        platform: string,
        arch: string
        hostname: string,
        totalMemory: number,
        freeMemory: number
        uptime: number
    },
    processInfo: {
        rss: number,
        heapTotal: number,
        heapUsed: number,
        external: number,
        arrayBuffers: number
    },
    cpuInfo: {
        manufacturer: string,
        brand: string,
        vendor: string,
        family: string,
        model: string,
        stepping: string,
        revision: string,
        voltage: string,
        speed: number,
        speedMin: number,
        speedMax: number,
        governor: string,
        cores: number,
        physicalCores: number,
        performanceCores: number,
        efficiencyCores: number,
        processors: number,
        socket: string,
        flags: string,
        virtualization: boolean,
        cache: {
            l1d: number,
            l1i: number,
            l2: number,
            l3: number
        }
    },
    memoryInfo: {
        total: number,
        free: number,
        used: number,
        active: number,
        available: number,
        buffers: number,
        cached: number,
        slab: number,
        buffcache: number,
        swaptotal: number,
        swapused: number,
        swapfree: number,
        writeback: null,
        dirty: null
    },
    networkInfo: [
        {
            iface: string,
            operstate: string,
            rx_bytes: number,
            rx_dropped: number,
            rx_errors: number,
            tx_bytes: number,
            tx_dropped: number,
            tx_errors: number,
            rx_sec: number,
            tx_sec: number,
            ms: number
        },
        {
            iface: string,
            operstate: string,
            rx_bytes: number,
            rx_dropped: number,
            rx_errors: number,
            tx_bytes: number,
            tx_dropped: number,
            tx_errors: number,
            rx_sec: null,
            tx_sec: null,
            ms: number
        }
    ]
}


interface IprocessInfo {
    rss: number,
    heapTotal: number,
    heapUsed: number,
    external: number,
    arrayBuffers: number
}


interface ImemoryInfo {
    total: number,
    free: number,
    used: number,
    active: number,
    available: number,
    buffers: number,
    cached: number,
    slab: number,
    buffcache: number,
    swaptotal: number,
    swapused: number,
    swapfree: number,
    writeback: null,
    dirty: null
}

export interface ImergedData {
    processInfo :[IprocessInfo]

    memoryInfo :[ImemoryInfo]

}

export interface ISingleProcess {
    Caption: string,
    CommandLine: string,
    CreationClassName: string,
    CreationDate: string,
    CSCreationClassName: string,
    CSName: string,
    Description: string,
    ExecutablePath: string,
    ExecutionState: any,
    Handle: number,
    HandleCount: number,
    InstallDate: null,
    KernelModeTime: number,
    MaximumWorkingSetSize: number,
    MinimumWorkingSetSize: number,
    Name: string,
    OSCreationClassName: string,
    OSName: string,
    OtherOperationCount: number,
    OtherTransferCount: number,
    PageFaults: number,
    PageFileUsage: number,
    ParentProcessId: number,
    PeakPageFileUsage: number,
    PeakVirtualSize: number,
    PeakWorkingSetSize: number,
    Priority: number,
    PrivatePageCount: number,
    ProcessId: number,
    QuotaNonPagedPoolUsage: number,
    QuotaPagedPoolUsage: number,
    QuotaPeakNonPagedPoolUsage: number,
    QuotaPeakPagedPoolUsage: number,
    ReadOperationCount: number,
    ReadTransferCount: number,
    SessionId: number,
    Status: any,
    TerminationDate: any,
    ThreadCount: number,
    UserModeTime: number,
    VirtualSize: number,
    WindowsVersion: string,
    WorkingSetSize: number,
    WriteOperationCount: number,
    WriteTransferCount: number,
    cpuUsage: number
}



export interface IosInfo {
        arch:string,
        hostname: string,
        uptime: number,
        cpuInfo: {
            brand: string,
            manufacturer: string,
            speed: number,
        },
        ramInfo: {
            total: number,
            free: number,
            used: number
        }

        windowsInfo : {
            build: string,
            os : string,
            release: string,
            servicepack: string
        }
}