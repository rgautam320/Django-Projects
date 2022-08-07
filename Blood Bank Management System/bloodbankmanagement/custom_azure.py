from storages.backends.azure_storage import AzureStorage

class AzureMediaStorage(AzureStorage):
    account_name = 'cloudcomputinglab' 
    account_key = 'Z3Lo1638axpT70jNAx8K643YgWYoRyo/umASnMHgRYejhAqlZPUhnM/FcpFhcbkkyWEisX6dYvG/ExmHqn43oA==' 
    azure_container = 'media'
    expiration_secs = None

class AzureStaticStorage(AzureStorage):
    account_name = 'cloudcomputinglab' 
    account_key = 'Z3Lo1638axpT70jNAx8K643YgWYoRyo/umASnMHgRYejhAqlZPUhnM/FcpFhcbkkyWEisX6dYvG/ExmHqn43oA=='
    azure_container = 'static'
    expiration_secs = None